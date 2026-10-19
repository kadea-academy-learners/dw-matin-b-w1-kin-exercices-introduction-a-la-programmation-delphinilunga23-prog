// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A1 — Kadea Express v2 : le calculateur de livraison (Niveau 3 — Avancé)

Objectif : écrire une fonction avec paramètre par défaut et plusieurs règles métier, et arrondir un résultat de calcul décimal.
Contexte : Kadea Express livre des colis dans Kinshasa (tarifs fictifs).

Consignes :
1. Écris calculerLivraison(distanceKm, poidsKg, estUrgent = false).
2. Tarif de base : jusqu'à 5 km, 2 000 FC ; jusqu'à 15 km, 4 000 FC ; au-delà, 7 000 FC.
3. Plus de 10 kg : + 1 500 FC. Urgent : tout le montant × 1,5.
4. Ajoute la TVA de 16 % et arrondis à l'entier avec Math.round().

Résultat attendu :
calculerLivraison(3, 2)         -> 2320
calculerLivraison(10, 12, true) -> 9570
calculerLivraison(20, 5)        -> 8120

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)





const calculerLivraison = (distanceKm, poidsKg, estUrgent = false) => {
    let tarifBase = 0;

    // Étape 1 : Tarif de base selon la distance
    if (distanceKm <= 5) {
        tarifBase = 2000;
    } else if (distanceKm <= 15) {
        tarifBase = 4000;
    } else {
        tarifBase = 7000;
    }

    // Étape 2 : Supplément poids (> 10 kg)
    if (poidsKg > 10) {
        tarifBase += 1500;
    }

    // Étape 3 : Majoration si urgent (comparaison stricte)
    if (estUrgent === true) {
        tarifBase *= 1.5;
    }

    // Étape 4 : Ajout de la TVA (16 %) et arrondi à l'entier
    const tauxTva = 0.16;
    const montantTotal = tarifBase * (1 + tauxTva);

    return Math.round(montantTotal);
};

// --- Tests avec des gabarits littéraux pour les messages ---
const resultatUn = calculerLivraison(3, 2);
console.log(`Montant de la première livraison : ${resultatUn} FC`);

const resultatDeux = calculerLivraison(10, 12, true);
console.log(`Montant de la deuxième livraison : ${resultatDeux} FC`);

const resultatTrois = calculerLivraison(20, 5);
console.log(`Montant de la troisième livraison : ${resultatTrois} FC`);