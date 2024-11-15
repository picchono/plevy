---
members: ["PLevy"]
title: "TET007 · CSS"
slug: "css"
institution:
    heig: 1
    logo: cnam
    short: Cnam
    name: "Conservatoire national des Arts et Métiers"
    web: "https://www.cnam.fr/"
chaire: false
date: 2021-10-01T00:55:28+02:00
draft: false
layout: single
tablecontent: true
searchFilter: Teaching
searchWeight: 1
notListed: true
chaire: false
place: "Cnam"
level: "bachelor"
language: French
ects: 4
teacher:
    teacher1:
        name: "Pierre Lévy"
frontphoto: "https://live.staticflickr.com/65535/52427464765_8fe12aeeee_h.jpg"
---

## CSS
### CSS3

Le CSS (cascade style sheet) est un language transformant l'apparence d'une page écrite dans un language de balisage. La version actuelle est le CSS3.

Dans le cadre de ce cours, il va permettre de styliser nos pages HTML. Le code CSS peut se mettre soit entre les balises \<style\>...\</style\> elles-mêmes placées entre les balises \<head\>...\</head\>, soit dans un autre fichier (e.g., style.css) que le fichier html doit appeler. C'est cette deuxième approche que nous utilisons.

### Appel du fichier CSS

*media* peut prendre les valeurs: all, media, print, speech

```html
<link rel="stylesheet" href="style.css" media="all">
```

&nbsp;
{{<exercice "Créez un fichier CSS à côté de vos fichiers HTML et liez un des fichiers HTML à ce fichier CSS. Collez ensuite le code ci-dessous dans le fichier CSS pour voir l'effet sur la page HTML.">}}

```css
html, body {
	background-color: rgb(28, 28, 28);
	color: lightcoral;
	font-size: 15px;
	line-height: 1.5rem;
  font-family: Avenir, sans-serif;
}
```

### Correspondances

**HTML / CSS**

```html
<body>...</body>
<div ID="Name">...</div>
<div class="Name">...</div>
```
&nbsp;
```css
body {...}
#Name {...}
.Name {...}
```

- un *ID* s'applique à un **objet unique** : il ne peut pas y avoir deux  ID identitques dans une page
- une *class* peut caractériser **plusieurs objets** (identiques ou non)
- 

### Styliser

un sélecteur peut être une *balise*, in *#ID*, ou une *.class*

```css
selecteur { 
	propriété1: valeurs;
	propriété2: valeurs;
}

body {
	background-color: black;
}
#pagename {
	font-size: 15px;
}
.textInRed {
	color: red;
}
```

### Conteneurs génériques

```html
<div>...</div> // div pour créer une division dans la page
<span>...</span>  //span pour une section en ligne

<flex>...</flex>  //flex pour créer un layout de divs
<grid>...</grid>  //grid pour créer une grille de divs
//(flex et grid ne s'applique pas qu'aux divs, mais c'est conseillé)
```

### Style: page

```css
selecteur { 
	propriété1: valeurs;
	propriété2: valeurs;
}

body {
	background-color: black;
}

#pagename {
	font-size: 15px;
}

.textInRed {
	color: red;
}

p.textInBlue {
	color: blue;
}

div p {
  text-decoration: underline;
}

div.type1, div.type2 {
	text-transform: uppercase;
}
```

### Commentaires en CSS

```css
selecteur { 
	propriété1: valeurs;
	propriété2: valeurs;
}

/* ceci est un commentaire */

body {
	background-color: black; /* ceci est un autre commentaire */
}
```

### Pseudo-classes

```html
<a href="#">...</a>
<a href="#">...</a>
<a href="#" class="firsta">...</a>
```

```css
/*  pseudo-classe lien visté (:visited)
    pseudo-classe lien souris par-dessus (:hover)
		pseudo-classe lien actif (:active)
		pseudo-classe premier du type (:first-child)
*/
a {
	color: red;
}
a:visited {
	color: yellow;
}
a:hover {
	color: green;
}
a:active {
	color: orange;
}
a:first-child {
	font-size: 26px;
}
```

Dernier exemple vu en cours

```html
<!DOCTYPE html> 
<head>
    <title>...</title>  <!-- titre -->
    <meta charset="UTF-8">  <!-- format du texte -->
      <meta name="keywords" content="mes, mots, clés">  <!-- mots clés -->
      <meta name="description" content="description du site"> <!-- description courte du contenu -->
      <meta name="author" content="Mon Nom">  <!-- nom de l'auteur de la page -->
      <meta http-equiv="refresh" content="30">  <!-- période avant reload -->
      <meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- viewpoint pour une apparence correcte sur de multiple écrans -->
      <link rel=stylesheet href="style.css" media="all">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet"> 
  </head>
  

  <body class="page1">
    <div class="section1">
      <h1>titre 1</h1>
      <p>texte 1a</p>
      <p>texte 1b</p>
    </div>
    <div class="section2">
      <h1>titre 2</h1>
      <p>texte 2</p>
    </div>

  <div>
    <a href="https://google.com">vers google</a>
  </div>
  </body>
```
&nbsp;
```css
html, body{
	font-family: 'Dancing Script', cursive;
}

div.section1 {
	background-color: yellow;
}

div.section1 p {
	color: red;
}

div.section2 {
	background-color: aqua;
}
div.section2 p{
	text-decoration: underline;
}
div.section2 p:hover{
	color: tomato;
}

a {
	color:red;
	text-decoration: none;
	font-family: 'Courier New', Courier, monospace
}
a:hover {
	color: green;
	text-decoration: underline red;
	font-size: 50px;
	background-color: yellow;;
}
```

## Pour aller plus loin

{{<linkBox "CSS Tutorial" "https://www.w3schools.com/css/default.asp" "https://www.w3schools.com/images/w3schools_logo_436_2.png">}}

{{<linkBox "Apprendre à coder en HTML et CSS | Cours complet (2020) - Pierre Giraud" "https://www.pierre-giraud.com/html-css-apprendre-coder-cours" "https://www.pierre-giraud.com/wp-content/uploads/2019/08/html-css-cours.png">}}
 
{{<linkBox "Snippets in HTML" "https://css-tricks.com/snippets/html/" "https://css-tricks.com/wp-json/social-image-generator/v1/image/3231">}}
 
{{<linkBox "Snippets in CSS" "https://css-tricks.com/snippets/css/" "https://css-tricks.com/wp-json/social-image-generator/v1/image/3222">}}

{{<linkBox "Create a new pen" "https://codepen.io/pen/" "https://assets.codepen.io/internal/screenshots/pens/default.png">}}
 