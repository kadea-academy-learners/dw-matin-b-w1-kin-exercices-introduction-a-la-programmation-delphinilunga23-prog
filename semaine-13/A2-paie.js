// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A2 — Le moteur de paie v2 (Niveau 3 — Avancé)

Objectif : parcourir un tableau avec .forEach(), accumuler un total et appliquer une règle d'heures supplémentaires.
Contexte : Kadea Tech paie ses techniciens 2 500 FC de l'heure ; au-delà de 40 h par semaine, chaque heure est payée 1,5 fois.

Consignes :
1. Pars de const heuresSemaine = [8, 9, 10, 8, 7, 6]; (du lundi au samedi).
2. Calcule le total des heures avec .forEach() et un accumulateur.
3. Écris calculerSalaire(heures, tauxHoraire = 2500) qui gère les heures supplémentaires.
4. Avec une boucle for, trouve le jour le plus chargé.

Résultat attendu :
Total : 48 h — Salaire : 130000 FC ; jour le plus chargé : mercredi (10 h).

Recherche (à rédiger dans RECHERCHES.md) :
La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)





const calculerSalaire = (heures, tauxHoraire = 2500) => {
    let totalHeures = 0;

    // Étape 2 : Calcul du total des heures avec .forEach()
    heures.forEach((heureJour) => {
        totalHeures += heureJour;
    });

    let salaireTotal = 0;
    const limiteHeuresNormales = 40;
    const majorationUrgence = 1.5;

    // Étape 3 : Gestion des heures supplémentaires
    if (totalHeures <= limiteHeuresNormales) {
        salaireTotal = totalHeures * tauxHoraire;
    } else {
        const heuresNormales = limiteHeuresNormales;
        const heuresSupplementaires = totalHeures - limiteHeuresNormales;
        
        salaireTotal = (heuresNormales * tauxHoraire) + (heuresSupplementaires * tauxHoraire * majorationUrgence);
    }

    return salaireTotal;
};

// --- Données initiales ---
const heuresSemaine = [8, 9, 10, 8, 7, 6]; // du lundi au samedi
const joursSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

// Calcul du total des heures pour l'affichage final
let totalHeuresSemaine = 0;
heuresSemaine.forEach((heure) => {
    totalHeuresSemaine += heure;
});

// Appel de la fonction de calcul du salaire
const salaireFinal = calculerSalaire(heuresSemaine);

// Étape 4 : Recherche du jour le plus chargé avec une boucle for
let maxHeures = heuresSemaine[0];
let indexJourMax = 0;

for (let i = 0; i < heuresSemaine.length; i++) {
    if (heuresSemaine[i] > maxHeures) {
        maxHeures = heuresSemaine[i];
        indexJourMax = i;
    }
}

const jourLePlusCharge = joursSemaine[indexJourMax];

// Affichage du résultat avec un gabarit littéral
console.log(`Total : ${totalHeuresSemaine} h — Salaire : ${salaireFinal} FC ; jour le plus chargé : ${jourLePlusCharge} (${maxHeures} h).`);