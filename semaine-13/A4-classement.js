// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A4 — Le classement de la promo (Niveau 3 — Avancé)

Objectif : combiner fonctions, boucles, conditions et méthodes de tableau dans un même programme.
Contexte : un formateur veut le bulletin d'une promo fictive.

Consignes :
1. Crée un tableau d'objets : Amani [14, 16, 15], Bijou [17, 18, 16], Christian [8, 11, 9], Divine [12, 10, 14], Exaucé [16, 15, 19].
2. Écris calculerMoyenne(notes) avec une boucle et un accumulateur, arrondie à une décimale.
3. Avec .map(), crée un bulletin avec nom, moyenne et mention : 16 et plus « Excellent », 10 et plus « Admis », sinon « Rattrapage ».
4. Avec .filter(), compte les admis (mention Excellent ou Admis) ; avec .find(), trouve le premier « Excellent ».
5. Affiche le bulletin avec console.table().

Résultat attendu :
moyennes 15, 17, 9.3, 12, 16.7 ; 4 admis ; premier Excellent : Bijou.

Recherche (à rédiger dans RECHERCHES.md) :
Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)




// 1. Création du tableau d'objets de la promo
const etudiants = [
    { nom: "Amani", notes: [14, 16, 15] },
    { nom: "Bijou", notes: [17, 18, 16] },
    { nom: "Christian", notes: [8, 11, 9] },
    { nom: "Divine", notes: [12, 10, 14] },
    { nom: "Exaucé", notes: [16, 15, 19] }
];

// 2. Fonction calculerMoyenne avec boucle, accumulateur et arrondi à une décimale
const calculerMoyenne = (notes) => {
    let sommeNotes = 0;

    for (let i = 0; i < notes.length; i++) {
        sommeNotes += notes[i];
    }

    const moyenneBrute = sommeNotes / notes.length;
    // Arrondi à une décimale mathématiquement (pour éviter le piège des strings de toFixed)
    return Math.round(moyenneBrute * 10) / 10;
};

// 3. Création du bulletin avec .map() et attribution des mentions
const bulletin = etudiants.map((etudiant) => {
    const moyenneCalculee = calculerMoyenne(etudiant.notes);
    let mentionEtudiant = "";

    if (moyenneCalculee >= 16) {
        mentionEtudiant = "Excellent";
    } else if (moyenneCalculee >= 10) {
        mentionEtudiant = "Admis";
    } else {
        mentionEtudiant = "Rattrapage";
    }

    return {
        nom: etudiant.nom,
        moyenne: moyenneCalculee,
        mention: mentionEtudiant
    };
});

// 4. Filtrer les admis et trouver le premier "Excellent"
const etudiantsAdmis = bulletin.filter((etudiant) => {
    return etudiant.mention === "Excellent" || etudiant.mention === "Admis";
});

const premierExcellent = bulletin.find((etudiant) => {
    return etudiant.mention === "Excellent";
});

// 5. Affichage du bulletin et des statistiques
console.log("--- Bulletin officiel de la promo ---");
console.table(bulletin);

console.log(`Nombre total d'admis : ${etudiantsAdmis.length}`);
console.log(`Premier Excellent : ${premierExcellent.nom} (${premierExcellent.moyenne})`);