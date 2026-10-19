// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M1 — FizzBuzz kinois (Niveau 2 — Moyen)

Objectif : combiner boucle for, modulo et ordre des conditions.
Contexte : un jeu de rapidité pour réveiller la promo le lundi matin.

Consignes :
1. Parcours les nombres de 1 à 30.
2. Multiple de 3 : affiche Malewa. Multiple de 5 : Wewa. Multiple de 3 et de 5 : MalewaWewa. Sinon, le nombre.
3. Explique en commentaire pourquoi l'ordre de tes conditions est important.

Résultat attendu (15 premiers) :
1, 2, Malewa, 4, Wewa, Malewa, 7, 8, Malewa, Wewa, 11, Malewa, 13, 14, MalewaWewa

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


for (let i = 1; i <= 30; i++) {
  // L'ordre des conditions est crucial : il faut tester d'abord le multiple commun (3 et 5, soit 15)
  // avant de tester les multiples individuels (3 ou 5). Sinon, un nombre comme 15 serait capturé
  // par la première condition rencontrée (ex: i % 3 === 0) et afficherait 'Malewa' au lieu de 'MalewaWewa'.
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('MalewaWewa');
  } else if (i % 3 === 0) {
    console.log('Malewa');
  } else if (i % 5 === 0) {
    console.log('Wewa');
  } else {
    console.log(i);
  }
}