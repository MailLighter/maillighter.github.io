# MailLighter Website

Official website of [MailLighter](https://maillighter.com), the free and open-source Outlook add-in that lightens your emails before you forward or reply.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![Deploy to GitHub Pages](https://github.com/MailLighter/maillighter.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/MailLighter/maillighter.github.io/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

- 🌐 Website: https://maillighter.com
- 🧩 Outlook add-in: https://github.com/MailLighter/MailLighter

---

## About

MailLighter is a lightweight, free and open-source Outlook add-in that strips unnecessary content from your emails: inline images, tracking pixels, attachments and long reply chains. The result: lighter messages, less bandwidth consumed and a smaller storage footprint.

This repository contains **the public website** (Astro) — product overview, documentation, FAQ, contact, legal pages, available in **EN / FR / ES**.

The site is automatically deployed to GitHub Pages on every push to `main`.

---

## Stack

- [Astro](https://astro.build) v5 + MDX
- TypeScript
- Tailwind CSS v4
- [astro-icon](https://www.astroicon.dev/) for icons

---

## Quick start

```bash
npm install
npm run dev
```

The site is then available at http://localhost:4321.

---

## Scripts

| Command           | Description                                |
|-------------------|--------------------------------------------|
| `npm run dev`     | Development server with hot reload         |
| `npm run build`   | Production build into `dist/`              |
| `npm run preview` | Preview the production build               |
| `npm run check`   | Astro type & content checks                |

---

## Project structure

```
src/
├── content/docs/        # Markdown documentation (en, fr/, es/)
├── pages/               # Site routes (en at root, fr/, es/)
├── components/          # Reusable Astro components
├── layouts/             # Global layouts
└── config/              # Navigation and shared content

public/                  # Files served as-is
└── images/              # Screenshots and illustrations
```

Documentation lives in `src/content/docs/` and is translated into 3 languages: the EN version sits at the root, FR under `fr/` and ES under `es/`.

---

## Useful links

- 🌐 Website: https://maillighter.com
- 📚 Documentation: https://maillighter.com/docs
- 🧩 Outlook add-in (source): https://github.com/MailLighter/MailLighter
- 🐛 Issues: https://github.com/MailLighter/maillighter.github.io/issues

---

## License

Website source code released under the [MIT](LICENSE) license.
