---
name: 'Whatsapp alert bot'
technologies: ['node.js', 'express.js','javascript', 'sqlite', 'docker']
description: 'Plataforma de notificaciones basada en WhatsApp que permite integrar sistemas externos mediante webhooks HTTP para el envío automatizado de alertas y eventos.'
github: "https://github.com/usuario/proyecto"
demo: ""
featured: true
year: 2025
status: "Activo"
---
# WhatsApp Alert Bot

Solución desarrollada para automatizar el envío de alertas y notificaciones a través de WhatsApp mediante la integración de sistemas externos utilizando webhooks HTTP. La aplicación actúa como un puente entre plataformas de monitoreo, automatización o gestión y grupos o contactos de WhatsApp.

## Objetivo

Facilitar la entrega inmediata de alertas críticas provenientes de herramientas de monitoreo y sistemas empresariales, reduciendo los tiempos de respuesta ante incidentes operativos.

## Tecnologías

* Node.js
* Express.js
* JavaScript
* SQLite
* Docker
* Puppeteer

## Funcionalidades principales

* Autenticación mediante código QR.
* Recepción de eventos a través de webhooks HTTP.
* Configuración dinámica de endpoints y destinos desde una interfaz web.
* Gestión centralizada de alertas y notificaciones.
* Despliegue simplificado mediante Docker y Dev Containers.
* Almacenamiento local de configuraciones y sesiones.

## Caso de uso

La aplicación es utilizada para integrar plataformas de monitoreo como Zabbix con grupos de soporte y operaciones en WhatsApp. Cuando un sistema detecta una alerta o incidente, realiza una llamada HTTP al webhook correspondiente y el bot distribuye automáticamente la notificación al destinatario configurado.

## Desafíos técnicos

* Gestión persistente de sesiones de WhatsApp.
* Manejo de múltiples flujos de notificaciones mediante webhooks configurables.
* Contenerización completa para facilitar la implementación en distintos entornos.
* Diseño de una interfaz de administración simple para usuarios no técnicos.

## Resultado

Se logró una solución flexible y de rápida implementación para la distribución de alertas operativas, permitiendo integrar sistemas existentes sin depender de servicios externos adicionales o plataformas de mensajería empresariales.
