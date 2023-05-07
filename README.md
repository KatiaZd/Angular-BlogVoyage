# Projet Blog de voyage 🗺️

Une photographe et globe trotteuse souhaite un blog pour pouvoir partager ses photos et astuces de voyage.

## Brief créatif :art:

### Contenu des pages :arrow_down:
Header :

- Sur mobile : fixé en haut de l'écran,
- Sur desktop : fixé à 180° à gauche de l'écran. 
Dans les deux cas, la largeur de la zone où se trouve la température doit être adapté à la taille du nom de la ville.


#### Home page : 

- Le dernier article doit être affiché en haut de la page afin d'être mise en valeur,
- En cliquant sur l'image, l'utilisateur est redirigé vers la page article. 


#### Page article : 

Un bouton retour est visible pour pouvoir revenir en arrière, sur la page home. 
- Sur mobile : fixé en haut à gauche, 
- Sur desktop : fixé en bas à droite. 

Sections : Le voyage/Résumé

- Ces deux sections utilisent un même composant qui prennent un titre et un contenu texte. 
Le conteneur s'ajuste à la taille du texte. 

Section : Notre avis

- Cette section est composé de trois listes qui viennent des données de l'article : Les plus, les moins, notre conseil.
Si l'une de ses listes est vide dans les données, alors que le titre ne s'affiche pas.

Section : Pour voyager un peu plus

Cette section comporte les autres images du voyage. 
- Sur mobile : elles s'affichent en colonne, par 1,
- Sur desktop : elles s'affichent en ligne, par 3. 


## Modalités d'évalution :
Le travail est séparer et évalué sous 3 couches de difficultés :

:white_check_mark: Niveau 1 : Réaliser le site responsive sans données, <br>
:white_check_mark: Niveau 2 : Créer des données et afficher les pages et données de façon dynamique, <br>
:white_check_mark: Niveau 3 : Requêter une api pour afficher la température de façon dynamique.

## Technologies
- Framework Angular <br>
- TypeScript <br>
- CSS

## Compatibilité

- Approche mobile-first, <br>
- Responsive sur mobile, tablette et desktop, <br>
- L'application fait appel à l'API https://www.visualcrossing.com/.

