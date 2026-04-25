---
title: "Instalación"
description: "Instala MailLighter en Outlook en menos de un minuto. Disponible en Microsoft Marketplace para Outlook Desktop y Outlook en la Web."
section: "Primeros pasos"
order: 2
draft: false
---

Instalar MailLighter lleva menos de un minuto. Esta guía cubre los requisitos, la instalación desde Marketplace y la verificación del complemento.

## Requisitos

Antes de instalar, asegúrate de tener:

- **Outlook Desktop** en Windows o macOS, o **Outlook en la Web**
- Una cuenta **Microsoft 365** o **Exchange**
- Conexión a internet (solo para la instalación, el complemento funciona sin conexión después)

> MailLighter aún no está disponible para Outlook Mobile.

## Instalar desde la Marketplace de Microsoft

1. Abre **Outlook Desktop o Web**
2. Ve a **Inicio** → **Obtener complementos** (o **Insertar** → **Obtener complementos** según tu versión)
3. Busca **MailLighter** en la Tienda
4. Haz clic en **Agregar** para instalar

El complemento aparece en la cinta inmediatamente. No es necesario reiniciar.

## Verificar la instalación

Una vez instalado, deberías ver un menú desplegable **MailLighter** en la cinta al redactar un correo; el menú desplegable MailLighter puede encontrarse en "Aplicaciones". El menú contiene las 6 funcionalidades siguientes:

- Eliminar imágenes
- Conservar 2 respuestas
- Eliminar archivos adjuntos
- Limpieza completa
- Conservar solo la selección
- Configuración

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

- Descubre cada funcionalidad en la guía de [Funcionalidades](/es/docs/commands)
- Comprende el [funcionamiento técnico](/es/docs/how-it-works)
