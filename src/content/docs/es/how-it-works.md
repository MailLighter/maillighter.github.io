---
title: "Cómo funciona"
description: "Descubre cómo MailLighter procesa los correos localmente mediante Office.js. Sin servidores externos, sin recopilación de datos — todo permanece en tu dispositivo."
section: "Técnico"
order: 5
draft: false
---

MailLighter está construido sobre Office.js, la API oficial de Microsoft para complementos de Outlook. Esta página explica la arquitectura técnica y cómo se procesan tus correos.

## Visión general

```
┌─────────────────────────────────────────┐
│              Outlook Desktop            │
│  ┌───────────────────────────────────┐  │
│  │     Complemento MailLighter       │  │
│  │  ┌─────────┐  ┌───────────────┐  │  │
│  │  │Comandos  │  │   Office.js   │  │  │
│  │  │ (JS/ES6) │  │     API       │  │  │
│  │  └────┬─────┘  └───────┬───────┘  │  │
│  │       │ Lectura/Escritura│          │  │
│  │       └────────┬────────┘          │  │
│  └────────────────┼──────────────────┘  │
│                   ▼                     │
│         Contenido del correo            │
│        (permanece en Outlook)           │
└─────────────────────────────────────────┘
          Sin servidor externo
```

## Flujo de procesamiento

Cuando ejecutas un comando de MailLighter:

1. **Outlook activa el comando** a través del menú desplegable de la cinta
2. **Office.js lee el cuerpo del correo** con el permiso `ReadWriteItem`
3. **MailLighter procesa el HTML** enteramente en JavaScript en tu dispositivo
4. **El contenido limpio se reescribe** en el borrador a través de Office.js

La operación completa ocurre localmente dentro de Outlook. Ningún dato se envía a ningún servidor externo.

## Stack tecnológico

| Componente | Tecnología |
|------------|-----------|
| Runtime | Office.js (vía Outlook) |
| Lenguaje | JavaScript (ES6+) |
| Transpilador | Babel |
| Bundler | webpack 5 |
| Interfaz | HTML / CSS (mínimo) |
| Localización | Módulo i18n personalizado (EN, FR, ES) |

## Modelo de permisos

MailLighter solicita un solo permiso: **ReadWriteItem**.

Es el permiso mínimo necesario para:
- Leer el cuerpo del correo (para procesarlo)
- Reescribir el contenido limpio

MailLighter **no** solicita:
- `ReadWriteMailbox` (acceso completo al buzón)
- `ReadItem` sin escritura (impediría la limpieza)
- Ningún permiso relacionado con la red

## Localización

MailLighter está disponible en 3 idiomas:
- **Inglés** (predeterminado)
- **Francés**
- **Español**

El idioma se detecta automáticamente desde la configuración de Outlook. Todas las etiquetas, descripciones e información de los comandos están traducidas.

## Código abierto

El código fuente completo está disponible en [GitHub](https://github.com/MailLighter/MailLighter) bajo licencia MIT. Puedes auditar el código, contribuir o bifurcarlo.
