// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F2 — Le convertisseur de saisie (Niveau 1 — Facile)

Objectif : comprendre qu'une saisie est du texte et la convertir avec Number().
Contexte : un formulaire de recharge mobile money renvoie toujours le montant sous forme de texte.

Consignes :
1. Déclare const saisie = '2500'; et affiche saisie + 500.
2. Explique en commentaire pourquoi le résultat est faux.
3. Corrige avec Number() et affiche le bon total.
4. Avant de les tester, écris tes prédictions pour Number(''), Number('abc'), Number(' 42 ') et Number(true), puis vérifie.

Résultat attendu :
2500500, puis 3000 ; les prédictions vérifiées : 0, NaN, 42, 1.

Recherche (à rédiger dans RECHERCHES.md) :
Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)



// 1. Déclaration de la variable saisie sous forme de chaîne de caractères
const saisie = "2500";

// Affiche "2500500" au lieu de 3000
console.log(saisie + 500);

// 2. Explication : 
// Le résultat est faux car "saisie" est de type String (texte). 
// L'opérateur "+" effectue alors une concaténation (assemblage de textes) 
// au lieu d'une addition mathématique.

// 3. Correction avec Number() et affichage du bon total (3000)
const montantConverti = Number(saisie);
const montantTotal = montantConverti + 500;
console.log(montantTotal);

// 4. Prédictions et vérifications des conversions avec Number()
// Prédictions :
// Number('')   -> 0 (une chaîne vide est convertie en 0)
// Number('abc') -> NaN (texte non numérique impossible à convertir)
// Number(' 42 ') -> 42 (les espaces aux extrémités sont ignorés)
// Number(true) -> 1 (le booléen true est converti en 1)

const testChaineVide = Number("");
const testTexteInvalide = Number("abc");
const testEspaces = Number(" 42 ");
const testBooleen = Number(true);

console.log(`Résultat Number(''): ${testChaineVide}`);
console.log(`Résultat Number('abc'): ${testTexteInvalide}`);
console.log(`Résultat Number(' 42 '): ${testEspaces}`);
console.log(`Résultat Number(true): ${testBooleen}`);