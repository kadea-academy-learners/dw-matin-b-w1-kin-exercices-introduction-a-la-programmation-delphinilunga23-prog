// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F1 — Ma carte d'apprenant (Niveau 1 — Facile)

Objectif : choisir le bon mot-clé (const ou let) et reconnaître les 5 types primitifs.
Contexte : Kadea prépare les badges de la promo et a besoin de ta fiche.

Consignes :
1. Déclare prenom, age, commune, estInscrit, surnom (sans valeur) et ancienneFormation (valeur null).
2. Choisis const ou let pour chacune et justifie ton choix en commentaire.
3. Affiche ta fiche avec un seul gabarit littéral (une seule chaîne construite par interpolation).
4. Affiche le typeof de chaque variable.

Résultat attendu :
Je m'appelle Grâce, j'ai 22 ans et j'habite à Lemba.
puis : string, number, string, boolean, undefined, object

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


// 1 & 2. Déclaration des variables avec const ou let et justifications
const prenom = "Delphin"; // const : le prénom ne change pas
let age = 25; // let : l'âge peut changer chaque année
const commune = "Lemba"; // const : la commune principale ne change pas
const estInscrit = true; // const : le statut d'inscription est fixe
let surnom; // let : déclaré sans valeur pour l'instant (vaut undefined)
const ancienneFormation = null; // const : absence intentionnelle de valeur précédente

// 3. Affichage de la fiche avec un seul gabarit littéral
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${commune}.`);

// 4. Affichage du typeof de chaque variable
console.log(typeof prenom, typeof age, typeof commune, typeof estInscrit, typeof surnom, typeof ancienneFormation);