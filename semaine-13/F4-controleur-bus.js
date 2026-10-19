// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F4 — Le contrôleur du bus (Niveau 1 — Facile)

Objectif : écrire un ternaire simple et un if / else if / else à trois branches.
Contexte : un bus Transco applique un tarif selon l'âge du passager (tarifs fictifs).

Consignes :
1. Déclare const age = 16;.
2. Avec un ternaire, crée statut qui vaut 'majeur' ou 'mineur'.
3. Avec if / else if / else, calcule tarif : moins de 5 ans gratuit, moins de 18 ans 500 FC, sinon 1 000 FC.
4. Affiche les deux résultats dans une phrase.

Résultat attendu :
Statut : mineur — Tarif : 500 FC

Recherche (à rédiger dans RECHERCHES.md) :
Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


// 1. Déclaration de l'âge du passager
const age = 16;

// 2. Utilisation d'un opérateur ternaire pour déterminer le statut ('majeur' ou 'mineur')
const statut = age >= 18 ? "majeur" : "mineur";

// 3. Calcul du tarif avec une structure if / else if / else à trois branches
let tarif = 0;

if (age < 5) {
    tarif = 0;
} else if (age < 18) {
    tarif = 500;
} else {
    tarif = 1000;
}

// 4. Affichage des deux résultats dans une seule phrase avec un gabarit littéral
console.log(`Statut : ${statut} — Tarif : ${tarif} FC`);