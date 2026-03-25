---
title: "Instalación"
description: "Instala MailLighter en Outlook en menos de un minuto. Disponible en Microsoft AppSource para Outlook Desktop en Windows y macOS."
section: "Primeros pasos"
order: 2
draft: false
---

Instalar MailLighter lleva menos de un minuto. Esta guía cubre los requisitos, la instalación desde AppSource y la verificación del complemento.

## Requisitos

Antes de instalar, asegúrate de tener:

- **Outlook Desktop** en Windows o macOS
- Una cuenta **Microsoft 365** o **Exchange**
- Conexión a internet (solo para la instalación — el complemento funciona sin conexión después)

> MailLighter aún no está disponible para Outlook en la Web ni Outlook Mobile.

## Instalar desde AppSource

1. Abre **Outlook Desktop**
2. Ve a **Inicio** → **Obtener complementos** (o **Insertar** → **Obtener complementos** según tu versión)
3. Busca **MailLighter** en la Tienda
4. Haz clic en **Agregar** para instalar

El complemento aparece en la cinta inmediatamente. No es necesario reiniciar.

## Verificar la instalación

Una vez instalado, deberías ver un grupo **MailLighter** en la cinta al leer o redactar un correo. El grupo contiene un menú desplegable con 5 comandos:

1. Eliminar imágenes
2. Eliminar archivos adjuntos
3. Mantener 2 respuestas
4. Mantener selección
5. Limpieza completa

Si no ves el grupo en la cinta, consulta la guía de [Solución de problemas](/es/docs/troubleshooting).

## Sideloading (Desarrolladores)

Si deseas probar una versión de desarrollo o contribuir al proyecto:

1. Clona el repositorio:

```bash
git clone https://github.com/MailLighter/MailLighter.git
cd MailLighter
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm start
```

4. Carga el complemento en Outlook siguiendo la [guía de sideloading de Microsoft](https://learn.microsoft.com/es-es/office/dev/add-ins/outlook/sideload-outlook-add-ins-for-testing).

## Siguientes pasos

- Descubre cada comando en la guía de [Comandos](/es/docs/commands)
- Comprende el [funcionamiento técnico](/es/docs/how-it-works)
