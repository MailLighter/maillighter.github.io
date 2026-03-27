---
title: "Solución de problemas"
description: "Soluciones a problemas comunes de MailLighter: complemento no visible, botones desactivados, contenido no eliminado."
section: "Recursos"
order: 11
draft: false
---

Esta guía cubre las soluciones a los problemas más comunes con MailLighter.

## El complemento no aparece en la cinta

### Causa

El complemento puede no estar cargado, o el grupo de la cinta puede estar minimizado.

### Soluciones

1. **Verifica la instalación**: Ve a **Inicio** → **Obtener complementos** → **Mis complementos** y verifica que MailLighter esté listado
2. **Reinicia Outlook**: Cierra y vuelve a abrir Outlook para recargar los complementos
3. **Verifica la personalización de la cinta**: Haz clic derecho en la cinta → **Personalizar cinta** y asegúrate de que MailLighter esté habilitado
4. **Reinstala**: Elimina el complemento desde **Mis complementos** y reinstálalo desde Marketplace

## Los botones están desactivados

### Causa

Los comandos de MailLighter solo están disponibles cuando tienes un correo abierto en modo lectura o redacción.

### Soluciones

1. **Abre un correo**: Haz clic en un correo para abrirlo en el panel de lectura o en una ventana nueva
2. **Verifica el modo de redacción**: Al responder o reenviar, la cinta debería estar activa
3. **Reinicia Outlook**: Si el problema persiste, reinicia Outlook

## El contenido no se elimina completamente

### Causa

Algunos clientes de correo generan HTML no estándar que puede no ser completamente procesado por MailLighter.

### Soluciones

1. **Prueba la limpieza completa**: Usa el comando «Limpieza completa» que aplica todas las operaciones
2. **Verifica el formato del correo**: MailLighter funciona mejor con correos HTML. Los correos en texto plano tienen poco formato para procesar
3. **Reporta el problema**: Si un formato de correo específico falla consistentemente, [repórtalo en GitHub](https://github.com/MailLighter/MailLighter/issues)

## Problemas de sideloading (Desarrolladores)

### El complemento no se carga después del sideloading

En Windows, la aplicación Outlook Desktop (desde Microsoft Store) puede bloquear las conexiones localhost. Necesitas agregar una exención de loopback:

1. Abre **PowerShell como administrador**
2. Ejecuta:

```powershell
CheckNetIsolation LoopbackExempt -a -n="Microsoft.OutlookForWindows_8wekyb3d8bbwe"
```

3. Reinicia Outlook e intenta el sideloading de nuevo

### Errores de compilación

Si `npm start` falla:

1. Verifica que **Node.js 18+** esté instalado
2. Elimina `node_modules` y reinstala:

```bash
rm -rf node_modules
npm install
```

3. Verifica conflictos de puerto (el servidor de desarrollo usa el puerto 3000 por defecto)

## ¿Necesitas más ayuda?

- **GitHub Issues**: [Reportar un bug](https://github.com/MailLighter/MailLighter/issues)
- **Contacto**: Contáctanos a través de la [página de contacto](/es/contact)
