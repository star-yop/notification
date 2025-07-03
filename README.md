# 📣 Notification Service - EduLite

Este microservicio forma parte del sistema **EduLite**, y su función es encargarse del **envío de notificaciones** a los usuarios. Las notificaciones pueden ser simuladas por consola o enviadas por email (simulado). Se comunica con el resto del ecosistema a través de **TCP**, y también expone una ruta HTTP para facilitar pruebas con herramientas como Postman.

---

## 🚀 Funcionalidades

- Enviar notificaciones a usuarios por medio de consola (simulación).
- Soporte para mensajes a través de TCP (uso interno entre microservicios).
- Ruta HTTP opcional para pruebas con `POST`.

---

## ⚙️ Tecnologías

- **NestJS**
- **TCP Microservices (NestJS Transport Layer)**
- **DTOs y Validación con `class-validator`**
- **HTTP (solo para pruebas locales)**

---

## 📦 Instalación

```bash
# Clonar repositorio
git clone <repo-url>
cd notification-service

# Instalar dependencias
npm install
