---
title: "Fonctionnalités"
description: "Découvrez les 6 fonctionnalités de MailLighter : supprimer les images, conserver 2 réponses, supprimer les pièces jointes, nettoyage complet, ne garder que la sélection et paramètres."
section: "Utilisation"
order: 3
draft: false
---

MailLighter propose 6 fonctionnalités, toutes accessibles depuis un menu déroulant dans le ruban d'Outlook. Chaque fonctionnalité cible un type spécifique d'encombrement.

<figure style="margin:1.75em auto;max-width:200px;background:#f8f9fb;border:1px solid #e4e7ec;border-radius:8px;overflow:hidden;">
  <div style="background:#fff;padding:1rem;border-bottom:1px solid #e4e7ec;display:flex;align-items:center;justify-content:center;">
    <img src="/images/ribbon-button.png" alt="Bouton MailLighter dans le ruban d'Outlook" style="max-width:100%;height:auto;display:block;" />
  </div>
  <figcaption style="padding:0.75rem 1rem;font-size:0.9em;color:#475467;line-height:1.4;text-align:center;">Le bouton MailLighter dans le ruban d'Outlook</figcaption>
</figure>

## Supprimer les images

Retire toutes les images intégrées (balises `<img>`) du corps de l'e-mail. Utile pour transférer des e-mails contenant des logos, bannières, signatures avec images ou captures d'écran.

**Ce qui est supprimé :**
- Images intégrées (dans le corps HTML)
- Signatures avec images
- Bannières marketing
- Pixel espion

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

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.25rem;margin:1.75em 0;">
  <figure style="margin:0;background:#f8f9fb;border:1px solid #e4e7ec;border-radius:8px;overflow:hidden;display:flex;flex-direction:column;">
    <div style="position:relative;background:#fff;height:260px;display:flex;align-items:center;justify-content:center;padding:0.75rem;border-bottom:1px solid #e4e7ec;">
      <span style="position:absolute;top:0.6rem;left:0.6rem;background:#3b82f6;color:#fff;font-size:0.7rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;padding:0.2rem 0.55rem;border-radius:4px;">Avant</span>
      <img src="/images/keep-selection-before.png" alt="E-mail avant nettoyage avec le bloc tarifaire encadré en rouge pour montrer la sélection" style="max-height:100%;max-width:100%;width:auto;height:auto;object-fit:contain;" />
    </div>
    <figcaption style="padding:0.75rem 1rem;font-size:0.9em;color:#475467;line-height:1.4;">L'e-mail complet, avec la zone sélectionnée</figcaption>
  </figure>
  <figure style="margin:0;background:#f8f9fb;border:1px solid #e4e7ec;border-radius:8px;overflow:hidden;display:flex;flex-direction:column;">
    <div style="position:relative;background:#fff;height:260px;display:flex;align-items:center;justify-content:center;padding:0.75rem;border-bottom:1px solid #e4e7ec;">
      <span style="position:absolute;top:0.6rem;left:0.6rem;background:#10b981;color:#fff;font-size:0.7rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;padding:0.2rem 0.55rem;border-radius:4px;">Après</span>
      <img src="/images/keep-selection-after.png" alt="E-mail après nettoyage, ne contenant plus que le bloc tarifaire sélectionné" style="max-height:100%;max-width:100%;width:auto;height:auto;object-fit:contain;" />
    </div>
    <figcaption style="padding:0.75rem 1rem;font-size:0.9em;color:#475467;line-height:1.4;">Seule la sélection est conservée, mise en forme préservée</figcaption>
  </figure>
</div>

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

<figure style="margin:1.75em auto;max-width:380px;background:#f8f9fb;border:1px solid #e4e7ec;border-radius:8px;overflow:hidden;">
  <div style="background:#fff;padding:1rem;border-bottom:1px solid #e4e7ec;display:flex;align-items:center;justify-content:center;">
    <img src="/images/settings-panel.png" alt="Panneau Paramètres de MailLighter avec le message écologique et la section Mes économies" style="max-width:100%;height:auto;display:block;" />
  </div>
  <figcaption style="padding:0.75rem 1rem;font-size:0.9em;color:#475467;line-height:1.4;text-align:center;">Le panneau Paramètres : message écologique et suivi des économies</figcaption>
</figure>

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
