/**
 * Le « moteur » commun à toutes les pages :
 * - défilement fluide (Lenis), coupé si la personne préfère moins d'animations ;
 * - apparitions au défilement ([data-reveal], [data-mots]).
 *
 * Tout reste lisible et utilisable sans JavaScript : ce script ne fait
 * qu'ajouter du mouvement par-dessus.
 */
import Lenis from 'lenis';

const calme = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --- Défilement fluide ------------------------------------------------- */
let lenis: Lenis | undefined;
if (!calme) {
  lenis = new Lenis({ lerp: 0.11, anchors: { offset: -90 } });
  const boucle = (temps: number) => {
    lenis?.raf(temps);
    requestAnimationFrame(boucle);
  };
  requestAnimationFrame(boucle);
}


/** Bloque le défilement de la page (menu ouvert). */
export function bloquerDefilement(bloque: boolean) {
  if (!lenis) return;
  if (bloque) lenis.stop();
  else lenis.start();
}

/* --- Titres découpés en mots ------------------------------------------- */
function decouperEnMots(element: HTMLElement) {
  let i = 0;
  const parcourir = (noeud: Node) => {
    for (const enfant of Array.from(noeud.childNodes)) {
      if (enfant.nodeType === Node.TEXT_NODE) {
        const texte = enfant.textContent ?? '';
        if (!texte.trim()) continue;
        const fragment = document.createDocumentFragment();
        texte.split(/(\s+)/).forEach((morceau) => {
          if (!morceau) return;
          if (/^\s+$/.test(morceau)) {
            fragment.append(document.createTextNode(' '));
            return;
          }
          const mot = document.createElement('span');
          mot.className = 'mot';
          const interieur = document.createElement('span');
          interieur.textContent = morceau;
          interieur.style.setProperty('--i', String(i++));
          mot.append(interieur);
          fragment.append(mot);
        });
        enfant.replaceWith(fragment);
      } else if (enfant.nodeType === Node.ELEMENT_NODE) {
        const el = enfant as HTMLElement;
        // Un mot stylé (italique, marqueur) reste un seul bloc.
        if (el.matches('.serif, .marqueur, .garder')) {
          const mot = document.createElement('span');
          mot.className = 'mot';
          const interieur = document.createElement('span');
          interieur.style.setProperty('--i', String(i++));
          el.replaceWith(mot);
          interieur.append(el);
          mot.append(interieur);
        } else if (el.tagName !== 'BR') {
          parcourir(el);
        }
      }
    }
  };
  parcourir(element);
}

document.querySelectorAll<HTMLElement>('[data-mots]').forEach(decouperEnMots);

/* --- Apparitions ------------------------------------------------------- */
const observateur = new IntersectionObserver(
  (entrees) => {
    for (const entree of entrees) {
      if (entree.isIntersecting) {
        entree.target.classList.add('est-visible');
        observateur.unobserve(entree.target);
      }
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
);
document.querySelectorAll('[data-reveal], [data-mots]').forEach((el) => observateur.observe(el));

