---
title: "Funcionalidades"
description: "Descubre las 6 funcionalidades de MailLighter: eliminar imágenes, conservar 2 respuestas, eliminar archivos adjuntos, limpieza completa, conservar solo la selección y configuración."
section: "Uso"
order: 3
draft: false
---

MailLighter ofrece 6 funcionalidades, todas accesibles desde un menú desplegable en la cinta de Outlook. Cada funcionalidad se dirige a un tipo específico de contenido innecesario.

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

## Conservar 2 respuestas

Reduce la conversación conservando solo las **2 últimas respuestas**. Perfecto para largos hilos de correo donde solo importan los intercambios recientes.

**Lo que elimina:**
- Todas las respuestas más allá de las 2 más recientes

**Lo que conserva:**
- El mensaje actual
- La respuesta anterior
- Todo el contenido de esos 2 mensajes (imágenes, formato)

ℹ️ **Confirmación:** Una confirmación muestra el número de respuestas detectadas y el espacio liberado.

## Eliminar archivos adjuntos

Elimina todos los archivos adjuntos del correo, excluyendo las imágenes integradas en el cuerpo del mensaje. Ideal para reenviar solo el contenido del mensaje sin los archivos adjuntos.

**Lo que elimina:**
- Todos los archivos adjuntos (PDF, Word, Excel, etc.)

**Lo que conserva:**
- El cuerpo completo del correo (texto + imágenes integradas)
- Las imágenes integradas (en el cuerpo HTML)
- La cadena de respuesta

ℹ️ **Confirmación:** Una confirmación muestra el número de archivos adjuntos eliminados y el espacio liberado.

## Limpieza completa

Aplica todas las operaciones de limpieza a la vez: elimina imágenes, elimina archivos adjuntos y conserva solo las 2 últimas respuestas. Es la forma más rápida de limpiar un correo antes de reenviarlo.

**Equivalente a ejecutar:**
1. Eliminar imágenes
2. Conservar 2 respuestas
3. Eliminar archivos adjuntos

**Resumen detallado:** Tras la limpieza, una notificación muestra un informe detallado:

```
✅ Limpieza completa finalizada — Imágenes: 3 (150 KB) | Adjuntos: 3 (252,4 KB) | Respuestas: 2 | Total ahorrado: 402,4 KB
```

Cada categoría muestra el número de elementos procesados y el espacio liberado, cuando corresponda. Para las respuestas, se muestra la reducción (ej.: 5 → 2).

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

## Configuración

Abre el panel de preferencias de MailLighter. Hay dos ajustes disponibles:

**Mensaje ecológico**  
Añade un breve pie de página ecológico a tus correos enviados. Puedes activarlo o desactivarlo, y personalizar el texto del mensaje. Se muestra una vista previa en tiempo real antes de guardar.

**Mis ahorros**  
Realiza un seguimiento acumulado de los datos eliminados en todas tus sesiones de limpieza:
- Imágenes eliminadas
- Archivos adjuntos eliminados
- Cadenas de respuesta reducidas
- Total ahorrado

Los ahorros se almacenan localmente en tu dispositivo y persisten entre sesiones.

## Resumen de funcionalidades

| Comando | Imágenes | Archivos adjuntos | Cadena de respuesta |
|---------|----------|-------------------|---------------------|
| Eliminar imágenes | ✅ Eliminadas | Conservados | Conservada |
| Conservar 2 respuestas | Conservadas | Conservados | ✅ Reducida |
| Eliminar archivos adjuntos | Conservadas | ✅ Eliminados | Conservada |
| Limpieza completa | ✅ Eliminadas | ✅ Eliminados | ✅ Reducida |
| Conservar solo la selección | Según selección | Conservados | Según selección |

ℹ️ Configuración abre el panel de preferencias — no actúa sobre el contenido del correo.
