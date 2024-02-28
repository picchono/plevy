---
title: "TET007-M1/1. HTML"
institution:
    logo: cnam
    short: Cnam
    name: "Conservatoire national des Arts et Métiers"
    web: "https://www.cnam.fr/"
    colo: "#c1002a"
date: 2021-10-01T00:55:28+02:00
draft: false
layout: single
tablecontent: true
searchFilter: Teaching
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

## Introduction

### L'internet, le web

[The Web Is Not The Net](https://www.youtube.com/watch?v=scWj1BMRHUA)

Internet signifie International Network (un réseau international), un réseau sur quel des ordinateurs peuvent échanger des informations entre eux. C’est un réseau global sur lequel il est possible de faire des visioconférences, télécharger de la musique et des films, etc.

Mais nous utilisons internet à travers le web : ça correspond à une sous-partie d’internet, il s’agit de vaste ensemble de données auxquelles vous pouvez accéder depuis votre navigateur.

Vous accédez à ces données grâce à un processus impliquant deux acteurs principaux : le serveur et le client (vous).

### Le navigateur

[Évolution de l'usage des navigateurs web - Wikipédia](https://fr.wikipedia.org/wiki/%C3%89volution_de_l%27usage_des_navigateurs_web)

Des machines (ou programmes) qui ont pour rôle d'envoyer les données du site web à son client dans un langage informatique.

Le navigateur "traduit" le langage envoyé par le serveur et formalise les données qu’il reçoit sous la forme de page web.
Exemples de navigateurs: Safari, Chrome, Opera, Safari, Edge...

### HTTP(S)

[HTTP vs HTTPS: quelle est la différence? - Journal du Tech](https://journaldutech.com/http-vs-https-quelle-est-la-difference/)

HTTP (Hypertext Transfer Protocol) est un protocole qui permet le transfer d'hypertext, c'est-à-dire les ressources distribuées sur le web, du serveur au client (l'ordinateur).

HTTPS est un protocole plus avancé et plus sécurisé que le HTTP. Il fonctionne grâce au protocole TLS (Transport Layer Security), une technologie de sécurité standard pour établir une connexion chiffrée entre un serveur web et un navigateur.

### HTML

[Commencer avec le HTML - Apprendre le développement web | MDN](https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

[Tryit Editor v3.7](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_document)

Le HTML (HyperText Markup Language) est, pour faire simple, le language informatique qui indique au navigateur ce qui doit être affiché (texte, image, video...) et comment. C'est ensuite le rôle du navigateur de "traduire" le HTML en une forme intelligible pour l'utilisateur.

"hypertext" renvoie au fait que le texte contient des liens que l'on peut cliquer pour naviguer entre pages web.

"markup" renvoie au fait que le language est structuré par des balises qui permettent de structurer le contenu et le comportement de la page.

## Installation de Visual Studio Code

[Visual Studio: IDE and Code Editor for Software Developers and Teams](https://visualstudio.microsoft.com/)

*Visual studio code is "a source-code editor that can be used with a variety of programming languages" under  MIT License (for the source code) and Microsoft proprietary software license for the binary built.*

## HTML

### La structure du HTML: les balises

[HTML Examples](https://www.w3schools.com/html/html_examples.asp)

[Liste de toutes les balises HTML](https://facemweb.com/creation-site-internet/liste-balises-html)

https://jaetheme.com/balises-html5/

&nbsp;
#### Le document HTML

```html
<!DOCTYPE html> 

<html>...</html>  <!-- conteneur du html -->
<head>...</head>  <!-- conteneur des méta-données -->
<body>...</body>  <!-- conteneur du corps principal -->

<header>...</header>  <!-- barre de titre -->
<nav>...</nav>  <!-- menu -->
<content>...</content>  <!-- contenu -->
<article>...</article>  <!-- article (blog) -->
<aside>...</aside>  <!-- partie latérale -->
<footer>...</footer>  <!-- pied de page -->
```
&nbsp;
#### Les titres

```html
<h1>...</h1>  <!-- titre niveau 1 -->
<h2>...</h2>  <!-- titre niveau 2 -->
...
<hn>...</hn>  <!-- titre niveau n -->
```

&nbsp;
#### Les paragraphes  et retours à la ligne et séparateurs

```html
<p>...</p>  <!-- paragraphe -->
<br/>  <!-- retour à la ligne -->
<hr/>  <!-- séparateur -->
```

&nbsp;
#### Les styles

```html
<b>...</b>  <!-- bold -->
<strong>...</strong>  <!-- bold -->

<i>...</i>  <!-- italique -->
<em>...</em>  <!-- italique -->

<del>...</del>  <!-- barre -->
<ins>...</ins>  <!-- souslignage -->
<mark>...</mark>  <!-- surlignage -->

<small>...</small>  <!-- petit texte -->

<pre>...</pre>  <!-- pre -->
<cite>...</cite>  <!-- citation -->
<q>...</q>  <!-- guillemets -->

<sub>...</sub>  <!-- subscript -->
<sup>...</sup>  <!-- supscript -->

<bdo dir="rtl">...</bdo>  <!-- droite à gauche (bi-directional override) -->
```

&nbsp;
#### Abbréviations

```html
<abbr title="...">...</abbr>  <!-- abréviation
```

&nbsp;
#### Les liens
*target* peut prendre les valeurs:
_blank, _self, _parent, _top, *framename*

```html
<!-- lien normal -->
<a href="https://..." title="...">...</a>

<!-- lien email -->
<a href="mailto:someone@example.com?
cc=someoneelse@example.com
&bcc=andsomeoneelse@example.com
&subject=Summer%20Party
&body=You%20are%20invited%20to%20a%20big%20summer%20party!"
target="_top">Send mail!</a>

<!-- lien interne -->
<a href="#tohere">...</a>
...
<p id="tohere">...</p>
```

&nbsp;
#### Images

```html
<img src="....jpg|webp|png|gif" alt="..." width="#" height="#" border="0">
```

&nbsp;
#### Listes

*ol* peut prendre les valeurs:
i, I,a, A, 1

```html
<ul>...</ul>  <!-- liste simple -->
	<li>...</li>

<ol type="#">...</ol>  <!-- liste numérotée -->
	<li>...</li>
```

Tableaux

```html
<table> <!-- tableau -->
	<tr> <!-- ligne 1 -->
		<td>.1.</td>  <!-- case -->
		<td>.2.</td>
	</tr>
	<tr> <!-- ligne 2 -->
		<td colspan="2">.1.</td> <!-- case étalée sur deux colonnes -->
	</tr>
</table>
```

&nbsp;
#### Les méta-données

```html
<head>
  <title>...</title>  <!-- titre -->
  <meta charset="UTF-8">  <!-- format du texte -->
	<meta name="keywords" content="mes, mots, clés">  <!-- mots clés -->
	<meta name="description" content="description du site"> <!-- description courte du contenu -->
	<meta name="author" content="Mon Nom">  <!-- nom de l'auteur de la page -->
	<meta http-equiv="refresh" content="30">  <!-- période avant reload -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">  <!-- viewpoint pour une apparence correcte sur de multiple écrans -->
	<style>...</style>  <!-- style (le plus souvent css) -->
	<script>...</script>  <!-- script (le plus souvent javascript) -->
	<link rel=stylesheet href="..." media="all">
</head>
```

&nbsp;
#### Commentaires

```html
<!-- Ceci est un commentaire -->

<!--
<p>Large commentaire avec du HTML</p>
<img border="0" src="" alt="">
-->

```

<aside>
💡 EXERCICE: Créez trois (ou plus) pages HTML sur un sujet de votre choix, incluant au moins des images, des liens internes et externes. 
Créer des méta-données pertinentes. 
N'oubliez pas de commenter votre page pour que quelqu'un d'autre comprennent le contenu et la structure. 

**Ne vous inquiétez pas du style, nous nous en occuperons plus tard.**

</aside>