// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M5 — La vitre teintée (portée de bloc) (Niveau 2 — Moyen)

Objectif : prédire où une variable existe et corriger une ReferenceError.

Consignes :
1. Le code ci-dessous est déjà recopié dans la zone de travail : écris tes prédictions en commentaire avant de l'exécuter.
2. Exécute-le : pourquoi la fonction afficher ne s'exécute-t-elle jamais ?
3. Corrige le code pour que tout s'affiche sans erreur, sans déplacer les déclarations dans les blocs.

Code fourni :
const ville = 'Kinshasa';
if (true) {
  const commune = 'Gombe';
  console.log(ville);
}
console.log(commune);

const afficher = () => {
  const secret = 'pondu';
  return secret;
};
console.log(afficher());
console.log(secret);

Résultat attendu :
avant correction : Kinshasa puis ReferenceError: commune is not defined.
après correction : tout s'affiche (Kinshasa, Gombe, pondu…) sans aucune erreur.

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// Mes prédictions (avant d'exécuter) :
//

const ville = 'Kinshasa';
if (true) {
  const commune = 'Gombe';
  console.log(ville);
}
console.log(commune);

const afficher = () => {
  const secret = 'pondu';
  return secret;
};
console.log(afficher());
console.log(secret);


// Mes prédictions (avant d'exécuter) :
// 1. Le script va afficher 'Kinshasa'.
// 2. Il va ensuite s'interrompre avec une ReferenceError (commune is not defined) 
//    car 'commune' est déclarée avec 'const' à l'intérieur du bloc if et est inaccessible à l'extérieur.
// 3. La fonction afficher() et les lignes suivantes ne s'exécuteront pas.

const ville = 'Kinshasa';
if (true) {
  const commune = 'Gombe';
  console.log(ville);
  console.log(commune); // Corrigé : affiché à l'intérieur du bloc où 'commune' existe
}

const afficher = () => {
  const secret = 'pondu';
  return secret;
};

console.log(afficher()); 
// console.log(secret); // Supprimé : 'secret' a une portée de fonction et n'est pas accessible ici