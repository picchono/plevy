---
slug: TET007-RNCP-3
title: "TET007-RNCP | 3 · Les moteurs de recherche"
layout: lecture
teaching: 'TET007-RNCP'
institution:
    logo: cnam
    name: "Conservatoire national des Arts et Métiers"
    web: "https://www.cnam.fr/"
    colo: "#c1002a"
date: 2021-09-01T16:27:15+02:00
abstract: "Une application web permettant de trouver des ressources à partir d’une requête. Les ressources peuvent être des pages web, des articles, des images, des vidéos, des fichiers, des billets d'avions, des hôtels, etc."
frontphoto: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=160&q=80"
subsection: course
---
## Moteurs de recherche

> [ask.com](http://ask.com/)
> [baidu.com](http://baidu.com/)
> [bing.com](http://bing.com/)
> [duckduckgo.com](http://duckduckgo.com/)
> [google.com](http://google.com/)
> [qwant.com](https://www.qwant.com/)
> [ecosia.org](http://ecosia.org/)
> [exalead.com](http://exalead.com/)
> [earch.yahoo.com](http://earch.yahoo.com/)
> [wopa.fr](http://wopa.fr/)
> [naver.com](http://naver.com/)
> [gigablast.com](http://gigablast.com/)
> [lycos.com](http://lycos.com/)
> [vizfind.com](https://vizfind.com/)
> ...

Une application web permettant de trouver des ressources à partir d’une requête.

Les ressources peuvent être des pages web, des articles, des images, des vidéos, des fichiers, des billets d'avions, des hôtels, etc.

Ce sont des instruments de recherche sur le web sans
intervention humaine (gérés par des algorithmes).

Un moteur de recherche peut être:

- Interne à un site (une fonctionnalité) : la recherche s’effectue à l’intérieur des documents du site (e.g., le moteur de recherche d'un ordinateur).
- Externe (le moteur de recherche est la fonctionnalité principale du site) : la recherche s’effectue sur l’ensemble du web selon des critères définis.

## L’exploration

***Collecter les ressources disponibles***

Les nouvelles pages sont découvertes par des robots collecteurs automatique de ressources (*spider*, *crawler*, *worm*) qui naviguent sur le web et collectent des information dans les liens (titre, URL...). Les informations collectées sont stockés dans des bases de données qui sont ensuite utilisées par des indexateurs.

Ce système fait que le web n'est pas indexé entièrement. Ce qui n'est pas indexé est le web profond (*deep web*),

## L’indexation

***Extraire, ordonner, hiérarchiser les ressources***

**Extraction** des mots considérés comme significatifs

Les mots extraits sont **ordonnés et enregistrés** dans une base de données organisée comme un gigantesque dictionnaire inverse.

Les termes significatifs sont **associés à un poids** ( la probabilité d’apparition du mot dans un document
et le « pouvoir discriminant de ce mot » dans
une langue ). Ceci peut être réalisé par la TF-IDF, une méthode de pondération utilisée en recherche
d’information et en particulier dans la fouille de textes.

### La formule TF-IDF

***Term Frequency - Inverse Document Frequency***

**TF: La fréquence d'apparition d'un terme dans un texte** (cas de la fréquence brute). Des variantes existent. *Plus le terme est présent dans le texte, plus il est pertinent.* Un simple ratio peut être utilisé (fréquence brute).

**IDF: La fréquence inverse de document contenant ce terme dans l'ensemble du corpus d'indexation**.
*Plus de textes possèdent ce terme dans le corpus, moins le terme est pertinent.* Le plus souvent l'IDF est le log du ratio entre le nombre de textes dans le corpus et le nombre de textes contenant le terme.

*Le succès de cette approche est conditionné par l'existence d'une liste de "stopwords".*

## **La recherche**

***restitution des résultats à partir des requêtes de l'utilisateur.***

- Critères de pertinence : les mots-clés du contenu, les ancres, la langue, géolocalisation, Domaine/ répertoires/noms de fichiers, liens externes...
- Critères de positionnement :  la confiance (TrustRank), le PageRank, les clics dans les résultats, le temps passé sur le document, le taux de rebond, panda et backlinks, penguin et liens entrants...

[Critères des algorithmes de moteurs de recherche: pertinence et positionnement](https://www.scriptol.fr/seo/bases-seo.php)

# Par delà le service

Les moteurs de recherches exercent un contrôle de l'accès à l'information et de sa hiérarchisation. Ceci implique un double contrôle : vis-à-vis des producteurs de contenus et vis-à-vis du public.

> 
>  **Exercice 4**
> 
>Sélectionnez les références sur lesquelles vous allez vous appuyer pour traiter votre sujet. Pour chaque référence argumentez en quoi elle est pertinente pour votre travail.
>