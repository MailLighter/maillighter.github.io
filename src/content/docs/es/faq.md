---
title: "Preguntas frecuentes"
description: "Preguntas frecuentes sobre MailLighter: compatibilidad, seguridad, formatos soportados e idiomas."
section: "Recursos"
order: 10
draft: false
---

Encuentra respuestas a las preguntas más comunes sobre MailLighter.

## General

### ¿Qué es MailLighter?

MailLighter es un complemento gratuito y de código abierto para Outlook que limpia los correos antes de reenviarlos o responder. Elimina imágenes, archivos adjuntos y cadenas de respuesta innecesarias.

### ¿Es gratuito MailLighter?

Sí, completamente gratuito. Sin suscripción, sin plan premium, sin compras integradas. MailLighter es de código abierto bajo licencia MIT.

### ¿Qué idiomas están soportados?

MailLighter está disponible en inglés, francés y español. El idioma se detecta automáticamente desde la configuración de Outlook.

## Compatibilidad

### ¿Qué versiones de Outlook son compatibles?

MailLighter funciona con **Outlook Desktop** en Windows y macOS. Requiere una cuenta Microsoft 365 o Exchange.

### ¿Funciona con Outlook en la Web?

Todavía no. El soporte para Outlook en la Web está previsto para una versión futura.

### ¿Funciona con Outlook Mobile?

No actualmente. Outlook Mobile no soporta las funciones de complemento que MailLighter necesita.

### ¿Funciona con Gmail u otros clientes de correo?

No. MailLighter está construido sobre Office.js, que es específico de Microsoft Outlook.

## Privacidad y seguridad

### ¿MailLighter lee mis correos?

MailLighter accede únicamente al correo que estás viendo o editando, mediante el permiso `ReadWriteItem`. Nunca accede a tu buzón ni a otros correos.

### ¿Se envían mis datos a algún servidor?

No. MailLighter procesa los correos 100 % localmente en tu dispositivo. No hay servidor — el complemento no realiza ninguna solicitud de red tras la instalación.

### ¿Es MailLighter conforme al RGPD?

Sí. Como no se recopilan, almacenan ni transmiten datos, MailLighter es conforme al RGPD por diseño. Consulta la página de [Privacidad y seguridad](/es/docs/privacy-security) para más detalles.

## Uso

### ¿Puedo deshacer una limpieza?

MailLighter modifica el borrador del correo. Si aún no has enviado el correo, puedes usar la función de deshacer de Outlook (Ctrl+Z) para revertir los cambios.

### ¿«Eliminar imágenes» también elimina archivos adjuntos?

No. Las imágenes y los archivos adjuntos se tratan por separado. «Eliminar imágenes» solo retira las imágenes integradas en el cuerpo del correo. Usa «Eliminar archivos adjuntos» para los archivos.

### ¿Qué hace exactamente «Mantener 2 respuestas»?

Reduce la conversación conservando solo las 2 respuestas más recientes, eliminando las partes más antiguas del hilo. Es útil para largas cadenas de correo.

### ¿Puedo personalizar el número de respuestas a conservar?

No por el momento. El comando «Mantener 2 respuestas» siempre conserva las 2 últimas. Opciones personalizables podrían añadirse en una versión futura.

## Solución de problemas

### El complemento no aparece en la cinta

Consulta la guía de [Solución de problemas](/es/docs/troubleshooting) para soluciones detalladas.

### Un comando no eliminó todo el contenido esperado

Algunos clientes de correo generan HTML complejo que puede no ser completamente analizado. Si encuentras este problema, por favor [reporta el problema](https://github.com/MailLighter/MailLighter/issues) describiendo el formato del correo.
