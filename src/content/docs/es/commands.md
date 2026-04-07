---
title: "Funcionalidades"
description: "Descubre las 5 funcionalidades de MailLighter: eliminar imágenes, eliminar archivos adjuntos, conservar 2 respuestas, conservar solo la selección y limpieza completa."
section: "Uso"
order: 3
draft: false
---

MailLighter ofrece 5 funcionalidades, todas accesibles desde un menú desplegable en la cinta de Outlook. Cada funcionalidad se dirige a un tipo específico de contenido innecesario.

## Eliminar imágenes

Retira todas las imágenes integradas (etiquetas `<img>`) del cuerpo del correo. Útil al reenviar correos con logos, banners, firmas con imágenes o capturas de pantalla.

**Lo que elimina:**
- Imágenes integradas (en el cuerpo HTML)
- Firmas con imágenes
- Banners de marketing

**Lo que conserva:**
- Todo el contenido de texto
- Archivos adjuntos (usa «Eliminar archivos adjuntos» para esos)
- El formato del correo

ℹ️ **Confirmación:** Una confirmación muestra el número de imágenes eliminadas y el espacio liberado.

## Eliminar archivos adjuntos

Elimina todos los archivos adjuntos del correo, excluyendo las imágenes integradas en el cuerpo del mensaje. Ideal para reenviar solo el contenido del mensaje sin los archivos adjuntos.

**Lo que elimina:**
- Todos los archivos adjuntos (PDF, Word, Excel, etc.)

**Lo que conserva:**
- El cuerpo completo del correo (texto + imágenes integradas)
- Las imágenes integradas (en el cuerpo HTML)
- La cadena de respuesta

ℹ️ **Confirmación:** Una confirmación muestra el número de archivos adjuntos eliminados y el espacio liberado.

## Conservar 2 respuestas

Reduce la conversación conservando solo las **2 últimas respuestas**. Perfecto para largos hilos de correo donde solo importan los intercambios recientes.

**Lo que elimina:**
- Todas las respuestas más allá de las 2 más recientes

**Lo que conserva:**
- El mensaje actual
- La respuesta anterior
- Todo el contenido de esos 2 mensajes (imágenes, formato)

ℹ️ **Confirmación:** Una confirmación muestra el número de respuestas detectadas y el espacio liberado.

## Conservar solo la selección

Conserva solo el texto que has **seleccionado manualmente** en el correo, eliminando todo lo demás. Te da control total sobre el contenido a conservar.

**Cómo usarlo:**
1. Abre o responde un correo
2. Selecciona el texto que deseas conservar (puede contener imágenes)
3. Haz clic en **Conservar solo la selección** en el menú de MailLighter

**Lo que elimina:**
- Todo lo que está fuera de tu selección

**Lo que conserva:**
- El texto seleccionado, con el formato preservado

## Limpieza completa

Aplica todas las operaciones de limpieza a la vez: elimina imágenes, elimina archivos adjuntos y conserva solo las 2 últimas respuestas. Es la forma más rápida de limpiar un correo antes de reenviarlo.

**Equivalente a ejecutar:**
1. Eliminar imágenes
2. Eliminar archivos adjuntos
3. Conservar 2 respuestas

**Resumen detallado:** Tras la limpieza, una notificación muestra un informe detallado:

```
✅ Limpieza completa finalizada — Imágenes: 3 (150 KB) | Adjuntos: 3 (252,4 KB) | Respuestas: 2 | Total ahorrado: 402,4 KB
```

Cada categoría muestra el número de elementos procesados y el espacio liberado, cuando corresponda. Para las respuestas, se muestra la reducción (ej.: 5 → 2).

## Resumen de funcionalidades

| Comando | Imágenes | Archivos adjuntos | Cadena de respuesta |
|---------|----------|-------------------|---------------------|
| Eliminar imágenes | ✅ Eliminadas | Conservados | Conservada |
| Eliminar archivos adjuntos | Conservadas | ✅ Eliminados | Conservada |
| Conservar 2 respuestas | Conservadas | Conservados | ✅ Reducida |
| Conservar solo la selección | Según selección | Conservados | Según selección |
| Limpieza completa | ✅ Eliminadas | ✅ Eliminados | ✅ Reducida |
