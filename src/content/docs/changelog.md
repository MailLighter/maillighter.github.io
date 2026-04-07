---
title: "Changelog"
description: "All MailLighter versions: new features, changes, and fixes."
section: "Resources"
order: 12
draft: false
---

All notable changes to MailLighter are documented on this page.

The format follows [Keep a Changelog](https://keepachangelog.com/).

## v1.0.0

Initial public release of MailLighter.

### Added

- **Remove images** : strips all inline images from the email body, with space saved notification
- **Remove attachments** : removes all attached files (excluding inline images), with space saved notification
- **Keep 2 replies** : trims the conversation to the last 2 replies, with reply count notification
- **Keep selection only** : replaces the email body with only the selected text (can include images)
- **Full cleanup** : runs all cleanup operations at once with a detailed summary (images, attachments, replies, total saved)
- Multilingual support : English, French, Spanish — ribbon labels and notifications adapt to the Outlook display language
- 100 % local processing — no external server, no data leaves your device
- Compatible with Outlook Desktop (Windows, macOS) and Outlook on the Web
- Open-source under MIT license
