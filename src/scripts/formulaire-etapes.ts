/**
 * Le moteur des formulaires en étapes du site (devis et candidature).
 * Chaque formulaire décrit ce qu'il attend avec des attributs data- ;
 * ce script fait le reste, de la même façon pour les deux :
 *
 * - une étape à la fois, barre de progression, « Continuer » / « Retour » ;
 * - validation : [data-choix-requis="nom"] (au moins une case cochée),
 *   champs required, email valide, case de consentement ;
 * - envoi par Web3Forms (data-cle="oui"), sinon la messagerie s'ouvre avec
 *   tout déjà écrit ;
 * - après l'envoi, [data-suite-whatsapp] et [data-suite-email] ouvrent un
 *   message qui reprend toute la demande (pour envoyer des photos, un CV…) ;
 * - pré-sélection par l'adresse : ?<data-param>=valeur coche les cases dont
 *   data-cles contient cette valeur.
 *
 * Sans JavaScript, toutes les étapes s'affichent et le navigateur envoie
 * le formulaire lui-même.
 */
import { defilerVers } from './site';

function initialiser(bloc: HTMLElement) {
  const form = bloc.querySelector<HTMLFormElement>('[data-form]');
  if (!form || bloc.dataset.pret) return;
  bloc.dataset.pret = 'oui';

  const d = bloc.dataset;
  const etapes = Array.from(form.querySelectorAll<HTMLFieldSetElement>('[data-etape]'));
  const segments = Array.from(form.querySelectorAll<HTMLElement>('[data-segment]'));
  const num = form.querySelector<HTMLElement>('[data-num]');
  const nomEtape = form.querySelector<HTMLElement>('[data-nom-etape]');
  const erreur = form.querySelector<HTMLElement>('[data-erreur]');
  const boutonPrecedent = form.querySelector<HTMLButtonElement>('[data-precedent]');
  const boutonSuivant = form.querySelector<HTMLButtonElement>('[data-suivant]');
  const boutonEnvoyer = form.querySelector<HTMLButtonElement>('[data-envoyer]');
  const merci = bloc.querySelector<HTMLElement>('[data-merci]');
  const echec = bloc.querySelector<HTMLElement>('[data-echec]');
  const nomsEtapes = JSON.parse(d.nomsEtapes ?? '[]') as string[];

  let courante = 0;
  bloc.classList.add('formulaire--js');

  const montrerErreur = (message: string) => {
    if (erreur) erreur.textContent = message;
  };

  const afficher = (index: number, focus = true) => {
    courante = index;
    etapes.forEach((etape, i) => {
      etape.hidden = i !== index;
      etape.classList.toggle('entre', i === index);
    });
    segments.forEach((segment, i) => segment.classList.toggle('actif', i <= index));
    if (num) num.textContent = String(index + 1);
    if (nomEtape) nomEtape.textContent = nomsEtapes[index] ?? '';
    if (boutonPrecedent) boutonPrecedent.hidden = index === 0;
    if (boutonSuivant) boutonSuivant.hidden = index === etapes.length - 1;
    if (boutonEnvoyer) boutonEnvoyer.hidden = index !== etapes.length - 1;
    montrerErreur('');
    if (focus) {
      etapes[index].querySelector<HTMLElement>('legend')?.focus({ preventScroll: true });
      // Si le haut du formulaire est sorti de l'écran (téléphone), on y remonte.
      if (form.getBoundingClientRect().top < 80) defilerVers(form);
    }
  };

  const signaler = (message: string, champ: HTMLElement) => {
    montrerErreur(message);
    champ.setAttribute('aria-invalid', 'true');
    champ.focus();
    return false;
  };

  const valider = (index: number): boolean => {
    const etape = etapes[index];
    etape.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));

    const choix = etape.dataset.choixRequis;
    if (choix && !etape.querySelector(`input[name="${choix}"]:checked`)) {
      montrerErreur(d.erreurChoix ?? '');
      etape.querySelector<HTMLInputElement>(`input[name="${choix}"]`)?.focus();
      return false;
    }

    for (const champ of Array.from(etape.querySelectorAll<HTMLInputElement>('input[required], textarea[required]'))) {
      if (champ.type === 'checkbox' && !champ.checked) return signaler(d.erreurConsentement ?? '', champ);
      if (champ.type !== 'checkbox' && !champ.value.trim()) return signaler(d.erreurChamp ?? '', champ);
    }

    const email = etape.querySelector<HTMLInputElement>('input[type="email"]');
    if (email && email.value.trim() && !email.checkValidity()) return signaler(d.erreurEmail ?? '', email);
    return true;
  };

  boutonSuivant?.addEventListener('click', () => {
    if (valider(courante)) afficher(courante + 1);
  });
  boutonPrecedent?.addEventListener('click', () => afficher(courante - 1));

  // Entrée dans un champ texte : passe à l'étape suivante plutôt que d'envoyer.
  form.addEventListener('keydown', (evenement) => {
    const cible = evenement.target as HTMLElement;
    if (evenement.key === 'Enter' && cible.tagName === 'INPUT' && courante < etapes.length - 1) {
      evenement.preventDefault();
      boutonSuivant?.click();
    }
  });

  // Un changement efface le message d'erreur.
  form.addEventListener('change', () => montrerErreur(''));

  /** Le texte lisible de la demande : data-recap = [[nom du champ, libellé], …], "" pour une ligne vide. */
  const resume = (): string => {
    const donnees = new FormData(form);
    const lignes = JSON.parse(d.recap ?? '[]') as ([string, string] | '')[];
    const dp = d.deuxPoints ?? ' : ';
    return lignes
      .map((ligne) => {
        if (!ligne) return '';
        const [nom, libelle] = ligne;
        const valeur = donnees.getAll(nom).map(String).filter(Boolean).join(', ').trim();
        return valeur ? `${libelle}${dp}${valeur}` : null;
      })
      .filter((ligne): ligne is string => ligne !== null)
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  };

  const terminer = (panneau: HTMLElement | null, secours = false) => {
    form.hidden = true;
    if (!panneau) return;
    if (panneau === merci) {
      const message = `${d.introSuite ?? ''}\n\n${resume()}`;
      const whatsapp = panneau.querySelector<HTMLAnchorElement>('[data-suite-whatsapp]');
      if (whatsapp) whatsapp.href = `https://wa.me/${d.whatsapp}?text=${encodeURIComponent(message)}`;
      const email = panneau.querySelector<HTMLAnchorElement>('[data-suite-email]');
      if (email) {
        email.href = `mailto:${d.email}?subject=${encodeURIComponent(d.sujetSuite ?? '')}&body=${encodeURIComponent(message)}`;
        // En mode secours, l'email de la demande s'ouvre déjà : pas de doublon.
        email.hidden = secours;
      }
      const titre = panneau.querySelector<HTMLElement>('[data-fin-titre]');
      const texte = panneau.querySelector<HTMLElement>('[data-fin-texte]');
      if (titre) titre.textContent = (secours ? titre.dataset.titreSecours : titre.dataset.titreMerci) ?? '';
      if (texte) texte.textContent = (secours ? texte.dataset.texteSecours : texte.dataset.texteMerci) ?? '';
    }
    panneau.hidden = false;
    panneau.focus({ preventScroll: true });
    if (panneau.getBoundingClientRect().top < 80) defilerVers(panneau);
  };

  form.addEventListener('submit', async (evenement) => {
    evenement.preventDefault();
    if (!valider(courante)) return;
    if (form.querySelector<HTMLInputElement>('input[name="botcheck"]')?.checked) return;

    // Pas de clé : la messagerie s'ouvre avec toute la demande déjà écrite.
    if (d.cle !== 'oui') {
      const lien = `mailto:${d.email}?subject=${encodeURIComponent(d.sujetEmail ?? '')}&body=${encodeURIComponent(resume())}`;
      const bouton = merci?.querySelector<HTMLAnchorElement>('[data-lien-secours]');
      if (bouton) {
        bouton.href = lien;
        bouton.hidden = false;
      }
      terminer(merci, true);
      window.location.href = lien;
      return;
    }

    const texteBouton = boutonEnvoyer?.querySelector('.bouton__texte');
    const texteInitial = texteBouton?.textContent ?? '';
    if (boutonEnvoyer) boutonEnvoyer.disabled = true;
    if (texteBouton) texteBouton.textContent = d.enCours ?? '…';

    const corps: Record<string, string> = {};
    new FormData(form).forEach((valeur, cle) => {
      corps[cle] = corps[cle] ? `${corps[cle]}, ${valeur}` : String(valeur);
    });

    try {
      const reponse = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(corps),
      });
      const resultat = await reponse.json().catch(() => ({ success: false }));
      terminer(reponse.ok && resultat.success ? merci : echec);
    } catch {
      terminer(echec);
    } finally {
      if (boutonEnvoyer) boutonEnvoyer.disabled = false;
      if (texteBouton) texteBouton.textContent = texteInitial;
    }
  });

  bloc.querySelector('[data-recommencer]')?.addEventListener('click', () => {
    form.reset();
    form.hidden = false;
    if (merci) merci.hidden = true;
    if (echec) echec.hidden = true;
    const secours = merci?.querySelector<HTMLElement>('[data-lien-secours]');
    if (secours) secours.hidden = true;
    afficher(0);
  });
  bloc.querySelector('[data-reessayer]')?.addEventListener('click', () => {
    form.hidden = false;
    if (echec) echec.hidden = true;
    afficher(etapes.length - 1);
  });

  // Pré-sélection depuis l'adresse (ex. ?travaux=toiture, ?metier=carrelage).
  const valeur = d.param ? new URLSearchParams(location.search).get(d.param) : null;
  if (valeur) {
    form.querySelectorAll<HTMLInputElement>('input[data-cles]').forEach((caseACocher) => {
      if ((caseACocher.dataset.cles ?? '').split(' ').includes(valeur)) caseACocher.checked = true;
    });
  }

  afficher(0, false);
}

document.querySelectorAll<HTMLElement>('[data-formulaire]').forEach(initialiser);
