---
title: "Privacy & Security"
description: "MailLighter is 100% local, open-source, and GDPR compliant. No user accounts, no tracking, no external servers."
section: "Technical"
order: 6
draft: false
---

Privacy is at the core of MailLighter's design. This page explains our privacy principles and security model.

## Privacy Principles

### 100% Local Processing

MailLighter processes emails entirely on your device using Office.js. No email content is ever sent to an external server. There is simply no server to send data to.

### No User Accounts

MailLighter does not require you to create an account, sign in, or provide any personal information. You install it and use it — that's it.

### No Data Collection

MailLighter does not collect, store, or transmit:
- Email content
- Email metadata (subject, sender, recipients)
- Usage statistics
- Device information
- Any personally identifiable information

### No Network Requests

After installation, MailLighter makes **zero network requests**. The add-in operates entirely offline. You can verify this by monitoring network traffic while using it.

## GDPR Compliance

MailLighter is GDPR compliant by design:

| GDPR Requirement | MailLighter |
|-------------------|-------------|
| Data minimization | No data collected |
| Purpose limitation | No processing beyond email cleanup |
| Storage limitation | No data stored |
| Right to erasure | Nothing to erase |
| Data portability | No data to export |
| Privacy by design | Local-only architecture |

## Permission Audit

MailLighter uses a single Office.js permission:

- **ReadWriteItem** — Allows reading and modifying the currently open email item

This is the most restrictive permission level that still allows the add-in to function. It provides access only to the email you are currently viewing or editing, not your entire mailbox.

## Open-Source Transparency

MailLighter is fully open-source under the MIT license. You can:
- **Audit the code** on [GitHub](https://github.com/MailLighter/MailLighter)
- **Verify** that no data leaves your device
- **Build from source** to ensure the installed version matches the public code

## Security Best Practices

MailLighter follows security best practices:

- **No inline scripts** — All JavaScript is bundled and served from local files
- **Content Security Policy** — Enforced via the add-in manifest
- **No third-party dependencies at runtime** — Only Office.js (provided by Microsoft)
- **No eval() or dynamic code execution**
