---
title: "Confidentialité et sécurité"
description: "MailLighter est 100 % local, open-source et conforme au RGPD. Aucun compte utilisateur, aucun suivi, aucun serveur externe."
section: "Technique"
order: 6
draft: false
---

La confidentialité est au cœur de la conception de MailLighter. Cette page détaille nos principes de confidentialité et notre modèle de sécurité.

## Principes de confidentialité

### Traitement 100 % local

MailLighter traite les e-mails entièrement sur votre appareil via Office.js. Aucun contenu d'e-mail n'est envoyé vers un serveur externe. Il n'y a tout simplement pas de serveur.

### Aucun compte utilisateur

MailLighter ne vous demande pas de créer un compte, de vous connecter ou de fournir des informations personnelles. Vous l'installez et vous l'utilisez — c'est tout.

### Aucune collecte de données

MailLighter ne collecte, ne stocke et ne transmet :
- Aucun contenu d'e-mail
- Aucune métadonnée (objet, expéditeur, destinataires)
- Aucune statistique d'utilisation
- Aucune information sur l'appareil
- Aucune donnée personnelle identifiable

### Aucune requête réseau

Après l'installation, MailLighter n'effectue **aucune requête réseau**. Le complément fonctionne entièrement hors ligne. Vous pouvez le vérifier en surveillant le trafic réseau pendant son utilisation.

### Stockage local (suivi des économies)

Le panneau Paramètres stocke trois valeurs numériques dans le localStorage de votre navigateur pour suivre le cumul de vos économies de nettoyage (octets supprimés par catégorie). Ces données :
- ne quittent jamais votre appareil
- ne contiennent ni contenu d'e-mail ni information personnelle
- peuvent être effacées à tout moment en vidant les données du site dans votre navigateur

## Conformité RGPD

MailLighter est conforme au RGPD par conception :

| Exigence RGPD | MailLighter |
|----------------|-------------|
| Minimisation des données | Aucune donnée collectée |
| Limitation des finalités | Aucun traitement au-delà du nettoyage |
| Limitation de stockage | Aucune donnée personnelle stockée — uniquement des statistiques agrégées d'économies en localStorage |
| Droit à l'effacement | Rien à effacer |
| Portabilité des données | Aucune donnée à exporter |
| Protection dès la conception | Architecture locale uniquement |

## Audit des permissions

MailLighter utilise une seule permission Office.js :

- **ReadWriteItem** : Permet de lire et modifier l'e-mail actuellement ouvert

C'est le niveau de permission le plus restrictif qui permet au complément de fonctionner. Il donne accès uniquement à l'e-mail que vous consultez ou modifiez, pas à l'ensemble de votre boîte.

## Bonnes pratiques de sécurité

MailLighter respecte les bonnes pratiques de sécurité :

- **Pas de scripts inline** : Tout le JavaScript est bundlé et servi depuis des fichiers locaux
- **Content Security Policy** : Appliquée via le manifeste du complément
- **Aucune dépendance tierce à l'exécution** : Uniquement Office.js (fourni par Microsoft)
- **Pas d'eval() ni d'exécution dynamique de code**
