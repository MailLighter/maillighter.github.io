---
title: "FAQ"
description: "Frequently asked questions about MailLighter: compatibility, security, supported formats, and languages."
section: "Resources"
order: 10
draft: false
---

Find answers to the most common questions about MailLighter.

## General

### What is MailLighter?

MailLighter is a free, open-source Outlook add-in that cleans emails before forwarding or replying. It removes images, attachments, and unnecessary reply chains.

### Is MailLighter free?

Yes, completely free. No subscription, no premium tier, no in-app purchases. MailLighter is open-source under the MIT license.

### What languages are supported?

MailLighter is available in English, French, and Spanish. The language is detected automatically from your Outlook settings.

## Compatibility

### Which versions of Outlook are supported?

MailLighter works with **Outlook Desktop** on Windows and macOS. It requires a Microsoft 365 or Exchange account.

### Does it work with Outlook on the Web?

Not yet. Outlook on the Web support is planned for a future release.

### Does it work with Outlook Mobile?

Not currently. Outlook Mobile does not support the add-in features MailLighter requires.

### Does it work with Gmail or other email clients?

No. MailLighter is built on Office.js, which is specific to Microsoft Outlook.

## Privacy & Security

### Does MailLighter read my emails?

MailLighter accesses only the email you are currently viewing or editing, using the `ReadWriteItem` permission. It never accesses your mailbox or other emails.

### Is my data sent to any server?

No. MailLighter processes emails 100% locally on your device. There is no server — the add-in makes zero network requests after installation.

### Is MailLighter GDPR compliant?

Yes. Since no data is collected, stored, or transmitted, MailLighter is GDPR compliant by design. See the [Privacy & Security](/docs/privacy-security) page for details.

## Usage

### Can I undo a cleanup?

MailLighter modifies the email draft. If you haven't sent the email yet, you can use Outlook's undo function (Ctrl+Z) to revert the changes.

### Does "Remove images" also remove attachments?

No. Images and attachments are treated separately. "Remove images" only removes inline images embedded in the email body. Use "Remove attachments" for file attachments.

### What does "Keep 2 replies" do exactly?

It trims the email conversation to keep only the 2 most recent replies, removing older parts of the thread. This is useful for long email chains.

### Can I customize the number of replies to keep?

Not currently. The "Keep 2 replies" command always keeps the last 2 replies. Customizable settings may be added in a future version.

## Troubleshooting

### The add-in doesn't appear in the ribbon

See the [Troubleshooting](/docs/troubleshooting) guide for detailed solutions.

### A command didn't remove all expected content

Some email clients generate complex HTML that may not be fully parsed. If you encounter this, please [report the issue](https://github.com/MailLighter/MailLighter/issues) with a description of the email format.
