---
title: "Installation"
description: "Install MailLighter in Outlook in under a minute. Available on Microsoft Marketplace for Outlook Desktop and Outlook on the Web."
section: "Getting Started"
order: 2
draft: false
---

Installing MailLighter takes less than a minute. This guide covers requirements, installation from Marketplace, and verifying that the add-in is working.

## Requirements

Before installing, ensure you have:

- **Outlook Desktop** on Windows or macOS, or **Outlook on the Web**
- A **Microsoft 365** or **Exchange** account
- An active internet connection (for installation only — the add-in works offline after that)

> MailLighter is not yet available for Outlook Mobile.

## Install from Marketplace

1. Open **Outlook Desktop**
2. Go to **Home** → **Get Add-ins** (or **Insert** → **Get Add-ins** depending on your version)
3. Search for **MailLighter** in the Store
4. Click **Add** to install

The add-in appears in your ribbon immediately. No restart required.

## Verify Installation

Once installed, you should see a **MailLighter** group in the ribbon when composing or reading an email. The group contains a dropdown menu with 5 commands:

1. Remove images
2. Remove attachments
3. Keep 2 replies
4. Keep selection only
5. Full cleanup

If you don't see the ribbon group, check the [Troubleshooting](/docs/troubleshooting) guide.

## Sideloading (Developers)

If you want to test a development version or contribute to the project:

1. Clone the repository:

```bash
git clone https://github.com/MailLighter/MailLighter.git
cd MailLighter
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Sideload the add-in in Outlook following [Microsoft's sideloading guide](https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/sideload-outlook-add-ins-for-testing).

## Next Steps

- Learn about each command in the [Commands](/docs/commands) guide
- Understand [How It Works](/docs/how-it-works) under the hood
