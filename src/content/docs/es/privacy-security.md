---
title: "Privacidad y seguridad"
description: "MailLighter es 100 % local, de código abierto y conforme al RGPD. Sin cuentas de usuario, sin seguimiento, sin servidores externos."
section: "Técnico"
order: 6
draft: false
---

La privacidad está en el centro del diseño de MailLighter. Esta página explica nuestros principios de privacidad y nuestro modelo de seguridad.

## Principios de privacidad

### Procesamiento 100 % local

MailLighter procesa los correos enteramente en tu dispositivo mediante Office.js. Ningún contenido de correo se envía a un servidor externo. Simplemente no hay servidor.

### Sin cuentas de usuario

MailLighter no te pide crear una cuenta, iniciar sesión ni proporcionar información personal. Lo instalas y lo usas — eso es todo.

### Sin recopilación de datos

MailLighter no recopila, almacena ni transmite:
- Ningún contenido de correo
- Ningún metadato (asunto, remitente, destinatarios)
- Ninguna estadística de uso
- Ninguna información del dispositivo
- Ningún dato personal identificable

### Sin solicitudes de red

Después de la instalación, MailLighter realiza **cero solicitudes de red**. El complemento funciona completamente sin conexión. Puedes verificarlo monitorizando el tráfico de red durante su uso.

## Conformidad RGPD

MailLighter es conforme al RGPD por diseño:

| Requisito RGPD | MailLighter |
|-----------------|-------------|
| Minimización de datos | Ningún dato recopilado |
| Limitación de finalidad | Sin procesamiento más allá de la limpieza |
| Limitación de almacenamiento | Ningún dato almacenado |
| Derecho de supresión | Nada que borrar |
| Portabilidad de datos | Ningún dato que exportar |
| Protección desde el diseño | Arquitectura solo local |

## Auditoría de permisos

MailLighter utiliza un solo permiso de Office.js:

- **ReadWriteItem** — Permite leer y modificar el correo actualmente abierto

Es el nivel de permiso más restrictivo que permite funcionar al complemento. Da acceso únicamente al correo que estás viendo o editando, no a todo tu buzón.

## Transparencia de código abierto

MailLighter es totalmente de código abierto bajo licencia MIT. Puedes:
- **Auditar el código** en [GitHub](https://github.com/MailLighter/MailLighter)
- **Verificar** que ningún dato sale de tu dispositivo
- **Compilar desde el código fuente** para asegurar la correspondencia con el código público

## Buenas prácticas de seguridad

MailLighter sigue las buenas prácticas de seguridad:

- **Sin scripts inline** — Todo el JavaScript está empaquetado y servido desde archivos locales
- **Content Security Policy** — Aplicada mediante el manifiesto del complemento
- **Sin dependencias de terceros en tiempo de ejecución** — Solo Office.js (proporcionado por Microsoft)
- **Sin eval() ni ejecución dinámica de código**
