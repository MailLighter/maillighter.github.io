---
title: "Installation"
description: "Installez MailLighter dans Outlook en moins d'une minute. Disponible sur Microsoft AppSource pour Outlook Desktop et Outlook sur le Web."
section: "Prise en main"
order: 2
draft: false
---

L'installation de MailLighter prend moins d'une minute. Ce guide couvre les prérequis, l'installation depuis AppSource et la vérification du bon fonctionnement.

## Prérequis

Avant d'installer, vérifiez que vous disposez de :

- **Outlook Desktop** sous Windows ou macOS, ou **Outlook sur le Web**
- Un compte **Microsoft 365** ou **Exchange**
- Une connexion internet (pour l'installation uniquement — le complément fonctionne hors ligne ensuite)

> MailLighter n'est pas encore disponible pour Outlook Mobile.

## Installer depuis AppSource

1. Ouvrez **Outlook Desktop**
2. Allez dans **Accueil** → **Obtenir des compléments** (ou **Insertion** → **Obtenir des compléments** selon votre version)
3. Recherchez **MailLighter** dans le Store
4. Cliquez sur **Ajouter** pour installer

Le complément apparaît immédiatement dans votre ruban. Aucun redémarrage n'est nécessaire.

## Vérifier l'installation

Une fois installé, vous devriez voir un groupe **MailLighter** dans le ruban lors de la lecture ou de la rédaction d'un e-mail. Ce groupe contient un menu déroulant avec 5 commandes :

1. Supprimer les images
2. Supprimer les pièces jointes
3. Garder 2 réponses
4. Garder la sélection
5. Nettoyage complet

Si vous ne voyez pas le groupe dans le ruban, consultez le guide de [Dépannage](/fr/docs/troubleshooting).

## Sideloading (Développeurs)

Si vous souhaitez tester une version de développement ou contribuer au projet :

1. Clonez le dépôt :

```bash
git clone https://github.com/MailLighter/MailLighter.git
cd MailLighter
```

2. Installez les dépendances :

```bash
npm install
```

3. Démarrez le serveur de développement :

```bash
npm start
```

4. Chargez le complément dans Outlook en suivant le [guide de sideloading de Microsoft](https://learn.microsoft.com/fr-fr/office/dev/add-ins/outlook/sideload-outlook-add-ins-for-testing).

## Étapes suivantes

- Découvrez chaque commande dans le guide des [Commandes](/fr/docs/commands)
- Comprenez le [fonctionnement technique](/fr/docs/how-it-works)
