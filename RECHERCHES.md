# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

## Pourquoi `typeof null` renvoie-t-il 'object' alors que `null` n'est pas un objet ?
Dans la toute première version de JavaScript (en 1995), les valeurs étaient stockées sous forme de types et de descripteurs binaires. Les objets étaient identifiés par le tag binaire `0`. 
Or, la valeur `null` était représentée par un pointeur nul (constitué uniquement de bits à `0`). En raison de cette coïncidence binaire, le moteur de JavaScript a interprété `null` comme étant un objet. Ce comportement a été conservé au fil des ans pour des raisons de rétrocompatibilité, afin de ne pas casser les anciens sites web.

**Mon test dans la console :**

```js
$ node semaine-13/F1-carte-apprenant.js 
Je m'appelle Delphin, j'ai 25 ans et j'habite à Lemba.
string number string boolean undefined object
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Définition : NaN ("Not-a-Number") représente le résultat d'une opération mathématique impossible ou invalide en JavaScript.

Incomparabilité : La comparaison NaN === NaN renvoie false car deux erreurs mathématiques ne sont jamais identiques.

Détection fiable : Il faut utiliser la méthode Number.isNaN() pour tester correctement la présence de NaN.

**Mon test dans la console :**

```js
$ node semaine-13/F2-convertisseur.js 
2500500
3000
Résultat Number(''): 0
Résultat Number('abc'): NaN
Résultat Number(' 42 '): 42
Résultat Number(true): 1
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Signe du modulo : En JavaScript, le modulo conserve le signe du nombre de gauche, ce qui fait que -7 % 2 donne -1.

Le piège du test direct : Tester === 1 échoue sur les nombres impairs négatifs puisque leur reste est -1.

Bonne pratique : Il est donc plus robuste d'utiliser !== 0 pour identifier universellement tous les nombres impairs.

**Mon test dans la console :**

```js
$ node semaine-13/F3-pair-impair.js 
Ticket 17 : impair, tu gagnes un stylo.
Ticket 24 : pair, tu gagnes un tote bag.
Ticket 0 : pair, tu gagnes un tote bag.
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Faisabilité : Oui, il est techniquement possible d'enchaîner plusieurs opérateurs ternaires en JavaScript.

Problème de lisibilité : Cet enchaînement transforme rapidement le code en une structure complexe et difficile à lire.

Alternative conseillée : Il est préférable d'utiliser des blocs if / else if / else pour préserver la clarté et la maintenabilité du code.


**Mon test dans la console :**

```js
$ node semaine-13/F4-controleur-bus.js 
Statut : mineur — Tarif : 500 FC
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Parenthèses : On peut les enlever uniquement lorsqu'il y a un seul paramètre (ex: prenom => ...).

Accolades et return : On peut les omettre si la fonction ne contient qu'une seule expression renvoyée directement (retour implicite).

Obligation : S'il y a 0 ou plusieurs paramètres, ou plusieurs lignes de code, les parenthèses, accolades et return sont obligatoires.

**Mon test dans la console :**

```js
$ node semaine-13/F5-fonction-flechee.js 
Mbote Lys !
49
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...continue : Interrompt uniquement l'itération en cours et passe directement à la suivante (saute une étape).

break : Arrête complètement et sort définitivement de la boucle, peu importe le nombre d'itérations restantes.

**Mon test dans la console :**

```js
10
9
8
7
6
4
3
2
1
Décollage !
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Filtre de base : FizzBuzz est célèbre pour éliminer rapidement les candidats incapables d'écrire une logique de code simple (boucles et conditions).

Piège logique : Il met en lumière la capacité à gérer l'ordre des priorités algorithmiques (tester le double multiple avant les simples).

Simplicité trompeuse : Bien que simple en apparence, un pourcentage surprenant de candidats diplômés échoue à le résoudre du premier coup.

**Mon test dans la console :**

```js
Wewa
26
Malewa
28
29
MalewaWewa
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
$ node semaine-13/M2-dab.js 
Retrait accepté. Nouveau solde : 75000 FC
Montant invalide : multiples de 5 000 FC uniquement
Plafond dépassé : 500 000 FC maximum
Solde insuffisant

```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Les 6 types falsy fondamentaux : En JavaScript, il existe précisément 6 valeurs évaluées à false dans un contexte conditionnel : false, 0 (ainsi que -0 et 0n), "" (chaîne vide), null, undefined et NaN.

Le reste est truthy : Tout ce qui n'est pas dans cette liste est considéré comme truthy, y compris les chaînes contenant un espace (' ') ou même le chiffre sous forme de texte ('0').

**Mon test dans la console :**

```js
vide
vide
vide
rempli
rempli
vide
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Opérateur ?? (Coalescence des nuls) : Fournit une valeur par défaut uniquement si la valeur de gauche est strictement null ou undefined.

Différence avec || : L'opérateur || réagit à toutes les valeurs falsy (0, "", false, NaN, etc.), ce qui provoque des bugs si une valeur comme 0 est un résultat valide.

Sécurité : ?? est donc beaucoup plus précis et recommandé pour attribuer des valeurs par défaut aux nombres ou aux booléens.

**Mon test dans la console :**

```js
Score : aucun
--- Après correction ---
Score : 15
Score : 0
Score : aucun
Bienvenue !
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

... Portée de bloc : let et const sont confinés au bloc {} où ils sont déclarés, contrairement à var qui fuit dans toute la fonction.

Hoisting (Hissage) : var est hissé et initialisé à undefined, tandis que let/const restent dans une "zone morte temporelle" (ReferenceError si accédés avant).

Bannissement de var : var est abandonné en JavaScript moderne pour éliminer les bugs liés aux fuites de variables et aux redéclarations involontaires.

**Mon test dans la console :**

```js
    at Module._load (node:internal/modules/cjs/loader:1443:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.21.0
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Les calculs en base 2 provoquent de légères erreurs d'arrondi sur certains nombres décimaux.

Cette méthode convertit les nombres en texte (string), ce qui perturbe les calculs mathématiques suivants.

 Privilégiez des calculs mathématiques purs pendant le traitement et réservez .toFixed() uniquement pour l'affichage final.

**Mon test dans la console :**

```js
$ node semaine-13/A1-livraison.js 
Montant de la première livraison : 2320 FC
Montant de la deuxième livraison : 9570 FC
Montant de la troisième livraison : 8120 FC
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...Principe de .reduce() : Elle condense tous les éléments d'un tableau en une seule valeur unique grâce à un accumulateur.

Fonctionnement : Elle s'appuie sur une fonction de rappel et une valeur de départ pour cumuler les données au fil des itérations.

Utilité : Elle offre une alternative élégante et plus concise aux boucles traditionnelles (comme .forEach()) pour additionner ou regrouper des valeurs.

**Mon test dans la console :**

```js
node semaine-13/A2-paie.js 
Total : 48 h — Salaire : 130000 FC ; jour le plus chargé : mercredi (10 h). 

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Affichage ciblé : La méthode console.table() permet de restreindre les colonnes affichées en passant un tableau de propriétés en second paramètre.

Résultat de .find() : Cette méthode renvoie la valeur spéciale undefined lorsqu'aucun élément ne correspond à la condition.

Résultat de .filter() : À l'inverse, elle retourne un tableau vide ([]) si aucune correspondance n'est trouvée.

**Mon test dans la console :**

```js
node semaine-13/A3-inventaire.js 
--- Inventaire complet ---
┌─────────┬─────┬────────────────────┬────────────────┬────────┬───────┐
│ (index) │ id  │ nom                │ categorie      │ prixFC │ stock │
├─────────┼─────┼────────────────────┼────────────────┼────────┼───────┤
│ 0       │ 101 │ 'Clé USB 32 Go'    │ 'Informatique' │ 14000  │ 25    │
│ 1       │ 102 │ 'Sac à dos Kadea'  │ 'Accessoires'  │ 42000  │ 0     │
│ 2       │ 103 │ 'Souris sans fil'  │ 'Informatique' │ 28000  │ 12    │
│ 3       │ 104 │ 'Gourde isotherme' │ 'Accessoires'  │ 21000  │ 8     │
│ 4       │ 105 │ 'Casque audio'     │ 'Informatique' │ 70000  │ 0     │
│ 5       │ 106 │ 'Carnet de notes'  │ 'Papeterie'    │ 7000   │ 40    │
└─────────┴─────┴────────────────────┴────────────────┴────────┴───────┘
Nombre de produits Informatique : 3
┌─────────┬─────┬───────────────────┬────────────────┬────────┬───────┐
│ (index) │ id  │ nom               │ categorie      │ prixFC │ stock │
├─────────┼─────┼───────────────────┼────────────────┼────────┼───────┤
│ 0       │ 101 │ 'Clé USB 32 Go'   │ 'Informatique' │ 14000  │ 25    │
│ 1       │ 103 │ 'Souris sans fil' │ 'Informatique' │ 28000  │ 12    │
│ 2       │ 105 │ 'Casque audio'    │ 'Informatique' │ 70000  │ 0     │
└─────────┴─────┴───────────────────┴────────────────┴────────┴───────┘
--- Inventaire avec prix en USD ---
┌─────────┬─────┬────────────────────┬────────────────┬────────┬───────┬─────────┐
│ (index) │ id  │ nom                │ categorie      │ prixFC │ stock │ prixUSD │
├─────────┼─────┼────────────────────┼────────────────┼────────┼───────┼─────────┤
│ 0       │ 101 │ 'Clé USB 32 Go'    │ 'Informatique' │ 14000  │ 25    │ 5       │
│ 1       │ 102 │ 'Sac à dos Kadea'  │ 'Accessoires'  │ 42000  │ 0     │ 15      │
│ 2       │ 103 │ 'Souris sans fil'  │ 'Informatique' │ 28000  │ 12    │ 10      │
│ 3       │ 104 │ 'Gourde isotherme' │ 'Accessoires'  │ 21000  │ 8     │ 8       │
│ 4       │ 105 │ 'Casque audio'     │ 'Informatique' │ 70000  │ 0     │ 25      │
│ 5       │ 106 │ 'Carnet de notes'  │ 'Papeterie'    │ 7000   │ 40    │ 3       │
└─────────┴─────┴────────────────────┴────────────────┴────────┴───────┴─────────┘
--- Tests de recherche ---
{
  id: 104,
  nom: 'Gourde isotherme',
  categorie: 'Accessoires',
  prixFC: 21000,
  stock: 8
}
Produit introuvable
Nombre de produits en rupture de stock : 2

```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Tri décroissant : On utilise .sort() avec une fonction de comparaison (b.moyenne - a.moyenne) pour classer du meilleur au moins bon.

Effet de bord (mutation) : Par défaut, .sort() modifie directement le tableau initial en mémoire.

Solution d'immuabilité : On évite cette modification en créant une copie du tableau avec l'opérateur spread ([...]) avant de trier.

**Mon test dans la console :**

```js
$ node semaine-13/A4-classement.js 

GABRIEL TAMBWE@DESKTOP-91MEANG UCRT64 C:/Users/HP/dw-matin-b-w1-kin-exercices-introduction-a-la-programmation-delphinilunga23-prog (main)
$ node semaine-13/A4-classement.js 
--- Bulletin officiel de la promo ---
┌─────────┬─────────────┬─────────┬──────────────┐
│ (index) │ nom         │ moyenne │ mention      │
├─────────┼─────────────┼─────────┼──────────────┤
│ 0       │ 'Amani'     │ 15      │ 'Admis'      │
│ 1       │ 'Bijou'     │ 17      │ 'Excellent'  │
│ 2       │ 'Christian' │ 9.3     │ 'Rattrapage' │
│ 3       │ 'Divine'    │ 12      │ 'Admis'      │
│ 4       │ 'Exaucé'    │ 16.7    │ 'Excellent'  │
└─────────┴─────────────┴─────────┴──────────────┘
Nombre total d'admis : 4
Premier Excellent : Bijou (17)
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

1. Qu'est-ce que la « recherche dichotomique » ?
La recherche dichotomique est un algorithme de recherche qui consiste à diviser par deux l'intervalle de recherche à chaque étape. En comparant la valeur recherchée au milieu de l'intervalle actuel, on élimine immédiatement la moitié des possibilités restantes.

## 2. Pourquoi 7 essais suffisent-ils toujours pour trouver un nombre entre 1 et 100 ?
Parce que chaque essai divise l'espace des possibles par 2. Mathématiquement, $2^7$ donne $128$, ce qui signifie qu'avec 7 essais, on peut couvrir un intervalle allant jusqu'à 128 valeurs, ce qui est largement supérieur aux 100 valeurs possibles de notre jeu.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
