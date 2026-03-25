---
title: "FAQ"
description: "Questions fréquentes sur MailLighter : compatibilité, sécurité, formats supportés et langues."
section: "Ressources"
order: 10
draft: false
---

Retrouvez les réponses aux questions les plus courantes sur MailLighter.

## Général

### Qu'est-ce que MailLighter ?

MailLighter est un complément Outlook gratuit et open-source qui nettoie les e-mails avant de les transférer ou d'y répondre. Il supprime les images, les pièces jointes et les chaînes de réponse inutiles.

### MailLighter est-il gratuit ?

Oui, entièrement gratuit. Pas d'abonnement, pas d'offre premium, pas d'achats intégrés. MailLighter est open-source sous licence MIT.

### Quelles langues sont supportées ?

MailLighter est disponible en anglais, français et espagnol. La langue est détectée automatiquement depuis vos paramètres Outlook.

## Compatibilité

### Quelles versions d'Outlook sont supportées ?

MailLighter fonctionne avec **Outlook Desktop** sous Windows et macOS. Un compte Microsoft 365 ou Exchange est nécessaire.

### Fonctionne-t-il avec Outlook sur le Web ?

Pas encore. Le support d'Outlook sur le Web est prévu pour une future version.

### Fonctionne-t-il avec Outlook Mobile ?

Non. Outlook Mobile ne prend pas en charge les fonctionnalités de compléments nécessaires à MailLighter.

### Fonctionne-t-il avec Gmail ou d'autres clients de messagerie ?

Non. MailLighter est construit sur Office.js, qui est spécifique à Microsoft Outlook.

## Confidentialité et sécurité

### MailLighter lit-il mes e-mails ?

MailLighter accède uniquement à l'e-mail que vous consultez ou modifiez, via la permission `ReadWriteItem`. Il n'accède jamais à votre boîte de réception ni à d'autres e-mails.

### Mes données sont-elles envoyées vers un serveur ?

Non. MailLighter traite les e-mails à 100 % en local sur votre appareil. Il n'y a pas de serveur — le complément n'effectue aucune requête réseau après l'installation.

### MailLighter est-il conforme au RGPD ?

Oui. Comme aucune donnée n'est collectée, stockée ou transmise, MailLighter est conforme au RGPD par conception. Consultez la page [Confidentialité et sécurité](/fr/docs/privacy-security) pour plus de détails.

## Utilisation

### Puis-je annuler un nettoyage ?

MailLighter modifie le brouillon de l'e-mail. Si vous n'avez pas encore envoyé l'e-mail, vous pouvez utiliser la fonction d'annulation d'Outlook (Ctrl+Z) pour revenir en arrière.

### « Supprimer les images » supprime-t-il aussi les pièces jointes ?

Non. Les images et les pièces jointes sont traitées séparément. « Supprimer les images » ne retire que les images intégrées dans le corps de l'e-mail. Utilisez « Supprimer les pièces jointes » pour les fichiers joints.

### Que fait exactement « Garder 2 réponses » ?

Cette commande réduit la conversation pour ne garder que les 2 réponses les plus récentes, en supprimant les parties plus anciennes du fil. C'est utile pour les longues chaînes d'e-mails.

### Puis-je personnaliser le nombre de réponses à conserver ?

Pas pour le moment. La commande « Garder 2 réponses » conserve toujours les 2 dernières réponses. Des paramètres personnalisables pourraient être ajoutés dans une future version.

## Dépannage

### Le complément n'apparaît pas dans le ruban

Consultez le guide de [Dépannage](/fr/docs/troubleshooting) pour des solutions détaillées.

### Une commande n'a pas supprimé tout le contenu attendu

Certains clients de messagerie génèrent du HTML complexe qui peut ne pas être entièrement analysé. Si vous rencontrez ce problème, veuillez [signaler le problème](https://github.com/MailLighter/MailLighter/issues) en décrivant le format de l'e-mail.
