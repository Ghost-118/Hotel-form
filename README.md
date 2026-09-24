# 🏨 Hotel Feedback Form & Management System

Sistema web interactivo para la recepción de opiniones y retroalimentación de huéspedes de hotel, con persistencia de datos en PostgreSQL y backend en Node.js / Express.

---

## 🚀 Características

- 📋 **Formulario de Evaluación:** Captura de comentarios, calificaciones y datos del huésped.
- 🎨 **Interfaz Dinámica:** Formulario estilizado con CSS3 interactivo y validaciones del lado del cliente (`script.js`).
- ⚡ **Backend REST API:** Servidor configurado con **Node.js** y **Express** (`server.js`) para procesar las solicitudes HTTP.
- 🗄️ **Base de Datos Relacional:** Estructura de base de datos optimizada en **PostgreSQL** (`hotel.sql`).

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Backend:** Node.js, Express.js
- **Base de Datos:** PostgreSQL
- **Control de Versiones:** Git & GitHub

---

## 📁 Estructura del Proyecto

```text
Hotel-form/
├── index.html       # Interfaz principal del formulario
├── style.css        # Estilos visuales del formulario
├── script.js       # Lógica e interacción del cliente
├── server.js        # API REST y conexión a PostgreSQL
├── hotel.sql        # Script de creación de base de datos y tablas
└── package.json     # Dependencias del proyecto Node.js
