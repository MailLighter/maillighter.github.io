---
title: "Fonctionnement"
description: "Découvrez comment MailLighter traite les e-mails localement via Office.js. Aucun serveur externe, aucune collecte de données — tout reste sur votre appareil."
section: "Technique"
order: 5
draft: false
---

MailLighter est construit sur Office.js, l'API officielle de Microsoft pour les compléments Outlook. Cette page explique l'architecture technique et la manière dont vos e-mails sont traités.

## Vue d'ensemble

```
┌─────────────────────────────────────────┐
│              Outlook Desktop            │
│  ┌───────────────────────────────────┐  │
│  │      Complément MailLighter       │  │
│  │  ┌─────────┐  ┌───────────────┐  │  │
│  │  │Commandes │  │   Office.js   │  │  │
│  │  │ (JS/ES6) │  │     API       │  │  │
│  │  └────┬─────┘  └───────┬───────┘  │  │
│  │       │ Lecture/Écriture │          │  │
│  │       └────────┬────────┘          │  │
│  └────────────────┼──────────────────┘  │
│                   ▼                     │
│          Contenu de l'e-mail            │
│         (reste dans Outlook)            │
└─────────────────────────────────────────┘
          Aucun serveur externe
```

## Flux de traitement

Lorsque vous exécutez une commande MailLighter :

1. **Outlook déclenche la commande** via le menu déroulant du ruban
2. **Office.js lit le corps de l'e-mail** avec la permission `ReadWriteItem`
3. **MailLighter traite le HTML** entièrement en JavaScript sur votre appareil
4. **Le contenu nettoyé est réécrit** dans le brouillon via Office.js

L'opération se déroule entièrement en local dans Outlook. Aucune donnée n'est envoyée vers un serveur externe.

## Stack technique

| Composant | Technologie |
|-----------|-------------|
| Runtime | Office.js (via Outlook) |
| Langage | JavaScript (ES6+) |
| Transpileur | Babel |
| Bundler | webpack 5 |
| Interface | HTML / CSS (minimal) |
| Localisation | Module i18n personnalisé (EN, FR, ES) |

## Modèle de permissions

MailLighter demande une seule permission : **ReadWriteItem**.

C'est la permission minimale nécessaire pour :
- Lire le corps de l'e-mail (pour le traiter)
- Réécrire le corps nettoyé

MailLighter ne demande **pas** :
- `ReadWriteMailbox` (accès complet à la boîte)
- `ReadItem` sans écriture (empêcherait le nettoyage)
- Aucune permission liée au réseau

## Localisation

MailLighter est disponible en 3 langues :
- **Anglais** (par défaut)
- **Français**
- **Espagnol**

La langue est automatiquement détectée depuis vos paramètres Outlook. Tous les libellés, descriptions et infobulles des fonctionnalités sont traduits.

## Open-source

Le code source complet est disponible sur [GitHub](https://github.com/MailLighter/MailLighter) sous licence MIT. Vous pouvez auditer le code, contribuer ou le forker.
