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
- An active internet connection (for installation only, the add-in works offline after that)

> MailLighter is not yet available for Outlook Mobile.

## Install from Microsoft Marketplace

1. Open **Outlook Desktop or Web**
2. Go to **Home** → **Get Add-ins** (or **Insert** → **Get Add-ins** depending on your version)
3. Search for **MailLighter** in the Store
4. Click **Add** to install

The add-in appears in your ribbon immediately. No restart required.

## Verify Installation

Once installed, you should see a **MailLighter** dropdown in the ribbon when composing an email; the MailLighter dropdown may be located under "Apps". The dropdown menu contains the following 6 features:

- Remove images
- Keep 2 replies
- Remove attachments
- Full cleanup
- Keep selection only
- Settings

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

- Learn about each feature in the [Features](/docs/commands) guide
- Understand [How It Works](/docs/how-it-works) under the hood
