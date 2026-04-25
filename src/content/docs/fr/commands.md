---
title: "Fonctionnalités"
description: "Découvrez les 6 fonctionnalités de MailLighter : supprimer les images, conserver 2 réponses, supprimer les pièces jointes, nettoyage complet, ne garder que la sélection et paramètres."
section: "Utilisation"
order: 3
draft: false
---

MailLighter propose 6 fonctionnalités, toutes accessibles depuis un menu déroulant dans le ruban d'Outlook. Chaque fonctionnalité cible un type spécifique d'encombrement.

## Supprimer les images

Retire toutes les images intégrées (balises `<img>`) du corps de l'e-mail. Utile pour transférer des e-mails contenant des logos, bannières, signatures avec images ou captures d'écran.

**Ce qui est supprimé :**
- Images intégrées (dans le corps HTML)
- Signatures avec images
- Bannières marketing

**Ce qui est conservé :**
- Tout le contenu texte
- Les pièces jointes (utilisez « Supprimer les pièces jointes » pour celles-ci)
- La mise en forme de l'e-mail

ℹ️ **Confirmation :** Une confirmation affiche le nombre d'images supprimées et l'espace libéré.

## Conserver 2 réponses

Réduit la conversation en ne conservant que les **2 dernières réponses**. Parfait pour les longues chaînes d'e-mails où seuls les échanges récents comptent.

**Ce qui est supprimé :**
- Toutes les réponses au-delà des 2 plus récentes

**Ce qui est conservé :**
- Le message actuel
- La réponse précédente
- Tout le contenu de ces 2 messages (images, mise en forme)

ℹ️ **Confirmation :** Une confirmation affiche le nombre de réponses détectées et l'espace libéré.

## Supprimer les pièces jointes

Supprime toutes les pièces jointes de l'e-mail, à l'exception des images intégrées dans le corps du message. Idéal pour transférer uniquement le contenu du message sans les fichiers joints.

**Ce qui est supprimé :**
- Toutes les pièces jointes (PDF, Word, Excel, etc.)

**Ce qui est conservé :**
- Le corps complet de l'e-mail (texte + images intégrées)
- Les images intégrées (dans le corps HTML)
- La chaîne de réponse

ℹ️ **Confirmation :** Une confirmation affiche le nombre de pièces jointes supprimées et l'espace libéré.

## Nettoyage complet

Applique toutes les opérations de nettoyage en une fois : supprime les images, supprime les pièces jointes et ne garde que les 2 dernières réponses. C'est le moyen le plus rapide de nettoyer un e-mail avant de le transférer.

**Équivalent à exécuter :**
1. Supprimer les images
2. Conserver 2 réponses
3. Supprimer les pièces jointes

**Résumé détaillé :** Après le nettoyage, une notification affiche un rapport détaillé :

```
✅ Nettoyage complet terminé — Images : 3 (150 Ko) | Pièces jointes : 3 (252,4 Ko) | Réponses : 2 | Total économisé : 402,4 Ko
```

Chaque catégorie indique le nombre d'éléments traités et l'espace libéré, le cas échéant. Pour les réponses, la réduction est affichée (ex. : 5 → 2).

## Ne garder que la sélection

Ne conserve que le texte que vous avez **sélectionné manuellement** dans l'e-mail, en supprimant tout le reste. Vous gardez un contrôle total sur le contenu à conserver.

**Comment l'utiliser :**
1. Ouvrez ou répondez à un e-mail
2. Sélectionnez le texte que vous souhaitez conserver (il peut contenir des images)
3. Cliquez sur **Ne garder que la sélection** dans le menu MailLighter

**Ce qui est supprimé :**
- Tout ce qui est en dehors de votre sélection

**Ce qui est conservé :**
- Votre texte sélectionné, avec la mise en forme préservée

## Paramètres

Ouvre le panneau de préférences de MailLighter. Deux réglages sont disponibles :

**Message écologique**  
Ajoute un court pied-de-page écologique à vos e-mails envoyés. Vous pouvez l'activer ou le désactiver, et personnaliser le texte. Un aperçu en direct est affiché avant d'enregistrer.

**Mes économies**  
Suit le cumul des données supprimées sur toutes vos sessions de nettoyage :
- Images supprimées
- Pièces jointes supprimées
- Chaînes de réponses réduites
- Total économisé

Les économies sont stockées localement sur votre appareil et persistent entre les sessions.

## Résumé des fonctionnalités

| Commande | Images | Pièces jointes | Chaîne de réponse |
|----------|--------|----------------|-------------------|
| Supprimer les images | ✅ Supprimées | Conservées | Conservée |
| Conserver 2 réponses | Conservées | Conservées | ✅ Réduite |
| Supprimer les pièces jointes | Conservées | ✅ Supprimées | Conservée |
| Nettoyage complet | ✅ Supprimées | ✅ Supprimées | ✅ Réduite |
| Ne garder que la sélection | Selon sélection | Conservées | Selon sélection |

ℹ️ Paramètres ouvre le panneau de préférences — cette option n'agit pas sur le contenu de l'e-mail.
