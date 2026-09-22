/**
 * Décode com.apple.metadata:_kMDItemUserTags : un plist binaire abrégé
 * (sans le bloc final habituel), contenant un tableau de chaînes
 * "NomDuTag\nCouleur". On lit objet par objet, dans l'ordre du fichier.
 */
export function decoderTags(buf) {
  if (!buf || buf.length < 9) return [];
  if (buf.subarray(0, 8).toString('latin1') !== 'bplist00') return [];

  let p = 8;
  const marqueur = buf[p++];
  if ((marqueur & 0xf0) !== 0xa0) return []; // doit être un tableau

  let compte = marqueur & 0x0f;
  if (compte === 0x0f) {
    // Compte encodé séparément (tableau de 15 éléments ou plus) : rare ici.
    const typeTaille = buf[p++];
    const nOctets = 1 << (typeTaille & 0x0f);
    compte = 0;
    for (let i = 0; i < nOctets; i++) compte = (compte << 8) | buf[p++];
  }

  // Références vers les objets (1 octet chacune pour un petit tableau).
  const refs = [];
  for (let i = 0; i < compte; i++) refs.push(buf[p++]);

  // Les objets eux-mêmes suivent, dans l'ordre : une chaîne par référence.
  const tags = [];
  for (let i = 0; i < compte; i++) {
    if (p >= buf.length) break;
    const m = buf[p++];
    const type = m & 0xf0;
    let longueur = m & 0x0f;
    if (longueur === 0x0f) {
      const typeTaille = buf[p++];
      const nOctets = 1 << (typeTaille & 0x0f);
      longueur = 0;
      for (let j = 0; j < nOctets; j++) longueur = (longueur << 8) | buf[p++];
    }
    let texte;
    if (type === 0x50) {
      // Chaîne ASCII/Latin-1 : 1 octet par caractère.
      texte = buf.subarray(p, p + longueur).toString('latin1');
      p += longueur;
    } else if (type === 0x60) {
      // Chaîne UTF-16 : 2 octets par caractère, gros-boutiste.
      texte = buf.subarray(p, p + longueur * 2).toString('utf16le');
      // Node lit en little-endian ; le plist est en big-endian : on permute.
      texte = Buffer.from(texte, 'utf16le').swap16().toString('utf16le');
      p += longueur * 2;
    } else {
      break; // type inattendu : on s'arrête plutôt que de produire n'importe quoi
    }
    // Retire le suffixe "\n<couleur>" que Finder ajoute à chaque tag.
    tags.push(texte.replace(/\n\d+$/, ''));
  }
  return tags;
}
