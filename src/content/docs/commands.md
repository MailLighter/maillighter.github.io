---
title: "Features"
description: "Discover MailLighter's 6 features: remove images, keep 2 replies, remove attachments, full cleanup, keep selection only, and settings."
section: "Usage"
order: 3
draft: false
---

MailLighter provides 6 features, all accessible from a dropdown menu in Outlook's ribbon. Each feature targets a specific type of email clutter.

<figure style="margin:1.75em auto;max-width:200px;background:#f8f9fb;border:1px solid #e4e7ec;border-radius:8px;overflow:hidden;">
  <div style="background:#fff;padding:1rem;border-bottom:1px solid #e4e7ec;display:flex;align-items:center;justify-content:center;">
    <img src="/images/ribbon-button.png" alt="MailLighter button in the Outlook ribbon" style="max-width:100%;height:auto;display:block;" />
  </div>
  <figcaption style="padding:0.75rem 1rem;font-size:0.9em;color:#475467;line-height:1.4;text-align:center;">The MailLighter button in the Outlook ribbon</figcaption>
</figure>

## Remove Images

Strips all inline images (`<img>` tags) from the email body. Useful when forwarding emails that contain logos, banners, signatures with images, or embedded screenshots.

**What it removes:**
- Inline images (embedded in the HTML body)
- Image signatures
- Marketing banners
- Tracking pixels

**What it keeps:**
- All text content
- Attachments (use "Remove Attachments" for those)
- Email formatting and structure

ℹ️ **Confirmation:** A confirmation shows the number of images removed and the space saved.

## Keep 2 Replies

Trims the email conversation to keep only the **last 2 replies**. This is perfect for long email threads where only the recent exchanges matter.

**What it removes:**
- All replies beyond the 2 most recent ones

**What it keeps:**
- The current message
- The previous reply
- All content within those 2 messages (images, formatting)

ℹ️ **Confirmation:** A confirmation shows the number of replies detected and the space saved.

## Remove Attachments

Removes all attached files from the email, excluding inline images embedded in the body. Ideal when you need to forward just the message content without the attached files.

**What it removes:**
- All file attachments (PDF, Word, Excel, etc.)

**What it keeps:**
- The full email body (text + inline images)
- Inline images (embedded in the HTML body)
- Reply chain

ℹ️ **Confirmation:** A confirmation shows the number of attachments removed and the space saved.

## Full Cleanup

Applies all cleanup operations at once: removes images, removes attachments, and keeps only the last 2 replies. This is the quickest way to fully clean an email before forwarding.

**Equivalent to running:**
1. Remove images
2. Keep 2 replies
3. Remove attachments

**Detailed summary:** After cleanup, a notification displays a detailed report:

```
✅ Full cleanup completed — Images: 3 (150 KB) | Attachments: 3 (252.4 KB) | Replies: 2 | Total saved: 402.4 KB
```

Each category shows the count of items processed and the space saved when applicable. For replies, the reduction is displayed (e.g. 5 → 2).

## Keep Selection Only

Keeps only the text you have **manually selected** in the email, removing everything else. This gives you full control over exactly what content to retain.

**How to use:**
1. Open or reply to an email
2. Select the text you want to keep (it can contain images)
3. Click **Keep Selection Only** from the MailLighter dropdown

**What it removes:**
- Everything outside your selection

**What it keeps:**
- Your selected text, with formatting preserved

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.25rem;margin:1.75em 0;">
  <figure style="margin:0;background:#f8f9fb;border:1px solid #e4e7ec;border-radius:8px;overflow:hidden;display:flex;flex-direction:column;">
    <div style="position:relative;background:#fff;height:260px;display:flex;align-items:center;justify-content:center;padding:0.75rem;border-bottom:1px solid #e4e7ec;">
      <span style="position:absolute;top:0.6rem;left:0.6rem;background:#3b82f6;color:#fff;font-size:0.7rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;padding:0.2rem 0.55rem;border-radius:4px;">Before</span>
      <img src="/images/keep-selection-before.png" alt="Email before cleanup with the pricing block outlined in red to show the selection" style="max-height:100%;max-width:100%;width:auto;height:auto;object-fit:contain;" />
    </div>
    <figcaption style="padding:0.75rem 1rem;font-size:0.9em;color:#475467;line-height:1.4;">The full email, with the selected area</figcaption>
  </figure>
  <figure style="margin:0;background:#f8f9fb;border:1px solid #e4e7ec;border-radius:8px;overflow:hidden;display:flex;flex-direction:column;">
    <div style="position:relative;background:#fff;height:260px;display:flex;align-items:center;justify-content:center;padding:0.75rem;border-bottom:1px solid #e4e7ec;">
      <span style="position:absolute;top:0.6rem;left:0.6rem;background:#10b981;color:#fff;font-size:0.7rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;padding:0.2rem 0.55rem;border-radius:4px;">After</span>
      <img src="/images/keep-selection-after.png" alt="Email after cleanup, containing only the selected pricing block" style="max-height:100%;max-width:100%;width:auto;height:auto;object-fit:contain;" />
    </div>
    <figcaption style="padding:0.75rem 1rem;font-size:0.9em;color:#475467;line-height:1.4;">Only the selection remains, with formatting preserved</figcaption>
  </figure>
</div>

## Settings

Opens the MailLighter preferences panel. Two settings are available:

**Eco message**  
Adds a short ecological footer to your outgoing emails. You can enable or disable it, and customize the message text. A live preview is shown before saving.

**My savings**  
Tracks the cumulative data removed across all your cleanup sessions:
- Images removed
- Attachments removed
- Reply chains trimmed
- Total saved

<figure style="margin:1.75em auto;max-width:380px;background:#f8f9fb;border:1px solid #e4e7ec;border-radius:8px;overflow:hidden;">
  <div style="background:#fff;padding:1rem;border-bottom:1px solid #e4e7ec;display:flex;align-items:center;justify-content:center;">
    <img src="/images/settings-panel.png" alt="MailLighter Settings panel showing the eco message and the My savings section" style="max-width:100%;height:auto;display:block;" />
  </div>
  <figcaption style="padding:0.75rem 1rem;font-size:0.9em;color:#475467;line-height:1.4;text-align:center;">The Settings panel: eco message and savings tracker</figcaption>
</figure>

Savings are stored locally on your device and persist across sessions.

## Command Summary

| Command | Images | Attachments | Reply chain |
|---------|--------|-------------|-------------|
| Remove images | ✅ Removed | Kept | Kept |
| Keep 2 replies | Kept | Kept | ✅ Trimmed |
| Remove attachments | Kept | ✅ Removed | Kept |
| Full cleanup | ✅ Removed | ✅ Removed | ✅ Trimmed |
| Keep selection only | Per selection | Kept | Per selection |

ℹ️ Settings opens the preferences panel — it does not act on email content.
