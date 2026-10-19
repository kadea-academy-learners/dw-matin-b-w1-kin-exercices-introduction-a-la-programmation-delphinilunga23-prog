// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A5 — Le nombre mystère (Niveau 3 — Avancé)

Objectif : construire un jeu complet avec while, prompt(), Number(), conditions et compteur.
Contexte : le jeu de la pause déjeuner : deviner un nombre entre 1 et 100 en 7 essais maximum.

Consignes :
1. Tire un nombre entier aléatoire entre 1 et 100 avec Math.random() et Math.floor().
2. Tant que le joueur n'a pas trouvé et qu'il lui reste des essais, demande un nombre avec prompt().
3. Refuse une saisie qui n'est pas un nombre (sans compter l'essai).
4. Réponds « plus grand », « plus petit » ou « trouvé en X essais ! ».
5. Si les 7 essais sont épuisés, révèle le nombre.

Résultat attendu :
un jeu jouable dans la console du navigateur, qui ne plante jamais, même si on tape « abc ».

Recherche (à rédiger dans RECHERCHES.md) :
Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)




const lancerJeuNombreMystere = () => {
    // 1. Générer un nombre entier aléatoire entre 1 et 100
    const nombreMystere = Math.floor(Math.random() * 100) + 1;
    const maxEssais = 7;
    let essaisRestants = maxEssais;
    let nombreTrouve = false;

    // 2. Boucle de jeu tant qu'il reste des essais et que ce n'est pas trouvé
    while (essaisRestants > 0 && nombreTrouve === false) {
        const saisieUtilisateur = prompt(`Devinez le nombre mystère entre 1 et 100 (Essais restants : ${essaisRestants}) :`);

        // Si l'utilisateur clique sur "Annuler", on interrompt la partie
        if (saisieUtilisateur === null) {
            console.log("Jeu interrompu par l'utilisateur.");
            return;
        }

        // Conversion en nombre
        const nombreSaisi = Number(saisieUtilisateur);

        // 3. Refuser une saisie qui n'est pas un nombre valide (sans compter l'essai)
        if (Number.isNaN(nombreSaisi) || saisieUtilisateur.trim() === "") {
            console.log("Ce n'est pas un nombre valide. Essayez encore (cet essai n'est pas comptabilisé).");
            continue; // Revient au début de la boucle sans décrémenter les essais
        }

        // 4. Comparaison et feedback
        if (nombreSaisi === nombreMystere) {
            const essaisUtilises = maxEssais - essaisRestants + 1;
            console.log(`Trouvé en ${essaisUtilises} essais ! Le nombre était bien ${nombreMystere}.`);
            nombreTrouve = true;
        } else if (nombreSaisi < nombreMystere) {
            console.log("Plus grand !");
            essaisRestants--;
        } else {
            console.log("Plus petit !");
            essaisRestants--;
        }
    }

    // 5. Si les 7 essais sont épuisés
    if (nombreTrouve === false) {
        console.log(`Dommage ! Vous avez épuisé vos 7 essais. Le nombre mystère était : ${nombreMystere}`);
    }
};