---
title: "Troubleshooting"
description: "Solutions to common MailLighter issues: add-in not visible, greyed-out buttons, content not removed."
section: "Resources"
order: 11
draft: false
---

This guide covers solutions to the most common issues with MailLighter.

## Add-in Not Visible in Ribbon

### Cause

The add-in may not be loaded, or the ribbon group may be collapsed.

### Solutions

1. **Check it's installed**: Go to **Home** → **Get Add-ins** → **My Add-ins** and verify MailLighter is listed
2. **Restart Outlook**: Close and reopen Outlook to reload add-ins
3. **Check ribbon customization**: Right-click the ribbon → **Customize Ribbon** and ensure MailLighter is enabled
4. **Reinstall**: Remove the add-in from **My Add-ins** and reinstall from AppSource

## Buttons Are Greyed Out

### Cause

MailLighter commands are only available when you have an email open in compose or read mode.

### Solutions

1. **Open an email**: Click on an email to open it in the reading pane or in a new window
2. **Check compose mode**: When replying or forwarding, the ribbon should be active
3. **Restart Outlook**: If the issue persists, restart Outlook

## Content Not Fully Removed

### Cause

Some email clients generate non-standard HTML that may not be fully parsed by MailLighter's processing.

### Solutions

1. **Try Full Cleanup**: Use the "Full cleanup" command which applies all operations
2. **Check the email format**: MailLighter works best with HTML emails. Plain text emails have limited formatting to process
3. **Report the issue**: If a specific email format consistently fails, [report it on GitHub](https://github.com/MailLighter/MailLighter/issues)

## Sideload Issues (Developers)

### Add-in Fails to Load After Sideloading

On Windows, the Outlook desktop app (from Microsoft Store) may block localhost connections. You need to add a loopback exemption:

1. Open **PowerShell as Administrator**
2. Run:

```powershell
CheckNetIsolation LoopbackExempt -a -n="Microsoft.OutlookForWindows_8wekyb3d8bbwe"
```

3. Restart Outlook and try sideloading again

### Build Errors

If `npm start` fails:

1. Ensure you have **Node.js 18+** installed
2. Delete `node_modules` and reinstall:

```bash
rm -rf node_modules
npm install
```

3. Check for port conflicts (the dev server uses port 3000 by default)

## Still Need Help?

- **GitHub Issues**: [Report a bug](https://github.com/MailLighter/MailLighter/issues)
- **Contact**: Reach us through the [contact page](/contact)
