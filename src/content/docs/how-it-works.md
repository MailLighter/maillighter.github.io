---
title: "How It Works"
description: "Learn how MailLighter processes emails locally using Office.js. No external servers, no data collection — everything stays on your device."
section: "Technical"
order: 5
draft: false
---

MailLighter is built on Office.js, Microsoft's official API for Outlook add-ins. This page explains the technical architecture and how your emails are processed.

## Architecture Overview

```
┌─────────────────────────────────────────┐
│                 Outlook                 │
│  ┌───────────────────────────────────┐  │
│  │         MailLighter Add-in        │  │
│  │  ┌─────────┐  ┌───────────────┐  │  │
│  │  │ Commands │  │   Office.js   │  │  │
│  │  │ (JS/ES6) │  │     API       │  │  │
│  │  └────┬─────┘  └───────┬───────┘  │  │
│  │       │   Read/Write    │          │  │
│  │       └────────┬────────┘          │  │
│  └────────────────┼──────────────────┘  │
│                   ▼                     │
│            Email Content                │
│         (stays in Outlook)              │
└─────────────────────────────────────────┘
          No external server
```

## Processing Flow

When you run a MailLighter command:

1. **Outlook triggers the command** via its ribbon dropdown menu
2. **Office.js reads the email body** using the `ReadWriteItem` permission
3. **MailLighter processes the HTML** entirely in JavaScript on your device
4. **The cleaned content is written back** to the email draft via Office.js

The entire operation happens locally within Outlook. No data is sent to any external server at any point.

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Runtime | Office.js (via Outlook) |
| Language | JavaScript (ES6+) |
| Transpiler | Babel |
| Bundler | webpack 5 |
| UI | HTML / CSS (minimal) |
| Localization | Custom i18n module (EN, FR, ES) |

## Permission Model

MailLighter requests a single permission: **ReadWriteItem**.

This is the minimum permission required to:
- Read the email body (to process it)
- Write the cleaned email body back

MailLighter does **not** request:
- `ReadWriteMailbox` (full mailbox access)
- `ReadItem` without write (would prevent cleaning)
- Any network-related permission

## Localization

MailLighter is available in 3 languages:
- **English** (default)
- **French**
- **Spanish**

The language is automatically detected from your Outlook settings. All command labels, descriptions, and tooltips are translated.

## Open Source

The full source code is available on [GitHub](https://github.com/MailLighter/MailLighter) under the MIT license. You can audit the code, contribute, or fork it.
