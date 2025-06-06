# Biblioteca Inteligente Backend

Este es el backend de la **Biblioteca Inteligente**, una API REST construida con Node.js, Express y Sequelize, utilizando **PostgreSQL** como base de datos.

## Características

- Gestión de usuarios (registro, login, CRUD)
- Gestión de libros (CRUD, subida de portadas)
- Historial de búsquedas y consultas a un asistente virtual (IA)
- Autenticación JWT y control de roles
- Separación de lógica en controladores, servicios y middlewares

## Requisitos

- Node.js >= 16
- PostgreSQL >= 12
- npm

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tuusuario/biblioteca-inteligente-backend.git
   cd biblioteca-inteligente-backend
   ```

2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Configura las variables de entorno en un archivo `.env`:

   ```
   DATABASE_URL=postgresql://postgres:exNfhQNBFpwxJRBNsUyHWDFLGNlBYtvB@switchback.proxy.rlwy.net:39588/railway
   
   JWT_SECRET=un_secreto_seguro
   OPENROUTER_KEY=tu_api_key_openrouter
   ```

4. Inicia el servidor:

   ```sh
   npm run dev
   ```

   El backend estará disponible en `http://localhost:3000`.

## Endpoints principales

Usuario	POST	/api/auth/login	Iniciar sesión con legajo y contraseña
Usuario	POST	/api/auth/register	Registrar usuario (Requiere body JSON)
Usuario	POST	/api/auth/logout	Logout (Requiere token en header Authorization)
Usuario	GET	/api/usuarios	Obtener todos los usuarios
Usuario	GET	/api/usuarios/{id}	Obtener los datos de un usuario específico
Libro	GET	/api/libros	Obtener todos los libros disponibles
Libro	GET	/api/libros/{id}	Obtener los detalles de un libro específico
Libro	GET	/api/libros/{id}/portada	Obtener la portada de un libro específico
Búsqueda	GET	/api/busquedas	Obtener todas las búsquedas realizadas (Requiere token)
Búsqueda	POST	/api/busquedas	Registrar una nueva búsqueda (Requiere token y body JSON)
Búsqueda	GET	/api/busquedas?usuarioId=123	Obtener búsquedas de un usuario
Asistente Virtual - Historial	GET	/api/asistente/historial	Obtener todas las preguntas y respuestas (Requiere token)
Asistente Virtual - Preguntas	POST	/api/asistente/ask	Registrar una nueva pregunta (Requiere token y body JSON)
Asistente Virtual - Prompts	POST	/api/asistente/prompts	Enviar un nuevo prompt
Test Backend GET	/test (Verifica si el backend responde OK)

## Estructura del proyecto

- [`src/app.js`](biblioteca-inteligente-backend/src/app.js): Configuración principal de Express
- [`src/models`](biblioteca-inteligente-backend/src/models): Modelos Sequelize
- [`src/controllers`](biblioteca-inteligente-backend/src/controllers): Lógica de negocio
- [`src/routes`](biblioteca-inteligente-backend/src/routes): Endpoints de la API
- [`src/middlewares`](biblioteca-inteligente-backend/src/middlewares): Middlewares de autenticación y autorización
