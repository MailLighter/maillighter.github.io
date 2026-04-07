---
title: "Dépannage"
description: "Solutions aux problèmes courants de MailLighter : complément non visible, boutons grisés, contenu non supprimé."
section: "Ressources"
order: 11
draft: false
---

Ce guide couvre les solutions aux problèmes les plus courants avec MailLighter.

## Le complément n'apparaît pas dans le ruban

### Cause

Le complément n'est peut-être pas chargé, ou le groupe du ruban est réduit.

### Solutions

1. **Vérifiez l'installation** : Allez dans **Accueil** → **Obtenir des compléments** → **Mes compléments** et vérifiez que MailLighter est listé
2. **Redémarrez Outlook** : Fermez et rouvrez Outlook pour recharger les compléments
3. **Vérifiez la personnalisation du ruban** : Clic droit sur le ruban → **Personnaliser le ruban** et assurez-vous que MailLighter est activé
4. **Réinstallez** : Supprimez le complément depuis **Mes compléments** et réinstallez-le depuis Marketplace

## Les boutons sont grisés

### Cause

Les fonctionnalités MailLighter ne sont disponibles que lors de la rédaction d'un e-mail (réponse, transfert ou création d'un nouveau message).

### Solutions

1. **Commencez à rédiger** : Répondez à, transférez ou créez un nouvel e-mail
2. **Vérifiez le mode rédaction** : Le menu déroulant MailLighter n'apparaît qu'en mode rédaction
3. **Redémarrez Outlook** : Si le problème persiste, redémarrez Outlook

## Le contenu n'est pas entièrement supprimé

### Cause

Certains clients de messagerie génèrent du HTML non standard qui peut ne pas être entièrement traité par MailLighter.

### Solutions

1. **Essayez le nettoyage complet** : Utilisez la commande « Nettoyage complet » qui applique toutes les opérations
2. **Vérifiez le format de l'e-mail** : MailLighter fonctionne mieux avec les e-mails HTML. Les e-mails en texte brut offrent peu de mise en forme à traiter
3. **Signalez le problème** : Si un format d'e-mail spécifique échoue systématiquement, [signalez-le sur GitHub](https://github.com/MailLighter/MailLighter/issues) ou [contactez-nous](/fr/contact)

## Problèmes de sideloading (Développeurs)

### Le complément ne se charge pas après le sideloading

Sous Windows, l'application Outlook Desktop (depuis le Microsoft Store) peut bloquer les connexions localhost. Vous devez ajouter une exemption de loopback :

1. Ouvrez **PowerShell en tant qu'administrateur**
2. Exécutez :

```powershell
CheckNetIsolation LoopbackExempt -a -n="Microsoft.OutlookForWindows_8wekyb3d8bbwe"
```

3. Redémarrez Outlook et réessayez le sideloading

### Erreurs de compilation

Si `npm start` échoue :

1. Vérifiez que **Node.js 18+** est installé
2. Supprimez `node_modules` et réinstallez :

```bash
rm -rf node_modules
npm install
```

3. Vérifiez les conflits de port (le serveur de développement utilise le port 3000 par défaut)

## Besoin d'aide ?

- **GitHub Issues** : [Signaler un bug](https://github.com/MailLighter/MailLighter/issues)
- **Contact** : Contactez-nous via la [page de contact](/fr/contact)
