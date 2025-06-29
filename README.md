# 📚 BiblioTech - Backend API

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

*Sistema de gestión bibliotecaria inteligente con asistente virtual de IA*

</div>

## 🌟 Descripción

**BiblioTech Backend** es una API REST robusta y escalable desarrollada para el sistema de gestión de biblioteca inteligente. Proporciona una plataforma completa para la administración de libros, usuarios, turnos de salas de estudio y un asistente virtual basado en IA para consultas bibliográficas.

### ✨ Características Principales

- 🔐 **Autenticación JWT** - Sistema seguro de autenticación y autorización
- 👥 **Gestión de Usuarios** - Registro, login y administración de usuarios con roles
- 📖 **Catálogo de Libros** - CRUD completo con subida de portadas
- 🤖 **Asistente Virtual IA** - Integración con OpenRouter para consultas inteligentes
- 📅 **Sistema de Turnos** - Gestión de reservas de salas de estudio
- 🔍 **Historial de Búsquedas** - Tracking de actividad de usuarios
- 👤 **Gestión de Invitados** - Sistema de invitaciones para turnos grupales
- 🏢 **Administración de Salas** - Control de espacios disponibles

## 🚀 Enlaces de Despliegue

### 🌐 Aplicaciones en Vivo
- **🖥️ Frontend (Vercel):** [*[Enlace del Frontend en Vercel]*](https://repositoriofrontendbibliotech.vercel.app/)
- **⚡ Backend API (Render):** [*[Enlace del Backend en Render]*](https://repositorio-backend-bibliotecainteligente.onrender.com/)

### 📂 Repositorios de Código
- **🎨 Frontend Repository:** [*[Enlace del Repositorio del Frontend]*](https://github.com/JereMicheloud/Repositorio-Frontend-BibliotecaInteligente)
- **⚙️ Backend Repository:** [*[Este Repositorio]*](https://github.com/FelipeDiazAimar/Repositorio-Backend-BibliotecaInteligente)

## 🛠️ Stack Tecnológico

| Tecnología | Propósito | Versión |
|------------|-----------|---------|
| **Node.js** | Runtime de JavaScript | ≥16.0.0 |
| **Express.js** | Framework web | ^5.1.0 |
| **PostgreSQL** | Base de datos relacional | ≥12.0 |
| **Sequelize** | ORM para PostgreSQL | ^6.37.7 |
| **JWT** | Autenticación | ^9.0.2 |
| **bcrypt** | Hashing de passwords | ^6.0.0 |
| **Multer** | Subida de archivos | ^2.0.0 |
| **Axios** | Cliente HTTP | ^1.9.0 |
| **CORS** | Cross-Origin Resource Sharing | ^2.8.5 |

## 📋 Requisitos Previos

- **Node.js** ≥ 16.0.0
- **PostgreSQL** ≥ 12.0
- **npm** o **yarn**
- Cuenta en **OpenRouter** (para IA)

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/biblioteca-inteligente-backend.git
cd biblioteca-inteligente-backend/biblioteca-inteligente-backend
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
# Base de Datos
DATABASE_URL=postgresql://usuario:password@host:puerto/database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=biblioteca_dev
DB_USER=postgres
DB_PASS=tu_password

# Autenticación
JWT_SECRET=tu_jwt_secreto_super_seguro

# IA (OpenRouter)
OPENROUTER_KEY=tu_openrouter_api_key

# Email (EmailJS)
TU_SERVICE_ID=tu_service_id
TU_TEMPLATE_ID=tu_template_id
TU_PUBLIC_KEY=tu_public_key

# Entorno
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:5173
```

### 4. Configurar Base de Datos

```bash
# Crear la base de datos (si no existe)
createdb biblioteca_dev

# Ejecutar migraciones/sincronización
npm run test-db
```

### 5. Cargar Datos de Prueba (Opcional)

```bash
node runSeed.js
```

### 6. Iniciar el Servidor

```bash
# Desarrollo con nodemon
npm run dev

# Producción
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📡 API Reference

### 🔐 Autenticación

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/auth/register` | Registrar nuevo usuario | ❌ |
| `POST` | `/api/auth/login` | Iniciar sesión | ❌ |
| `POST` | `/api/auth/logout` | Cerrar sesión | ✅ |

### 👥 Usuarios

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/usuarios` | Listar todos los usuarios | ✅ |
| `GET` | `/api/usuarios/:id` | Obtener usuario por ID | ✅ |
| `GET` | `/api/usuarios/dni/:dni` | Buscar usuario por DNI | ✅ |
| `PUT` | `/api/usuarios/:id` | Actualizar usuario | ✅ |
| `DELETE` | `/api/usuarios/:id` | Eliminar usuario | ✅ |

### 📚 Libros

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/libros` | Listar todos los libros | ❌ |
| `GET` | `/api/libros/:id` | Obtener libro por ID | ❌ |
| `GET` | `/api/libros/:id/portada` | Obtener portada del libro | ❌ |
| `GET` | `/api/libros/buscar?termino=` | Buscar libros | ❌ |
| `POST` | `/api/libros` | Crear nuevo libro | ✅ |
| `PUT` | `/api/libros/:id` | Actualizar libro | ✅ |
| `DELETE` | `/api/libros/:id` | Eliminar libro | ✅ |

### 🤖 Asistente Virtual

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/asistente/ask` | Hacer pregunta a la IA | ❌ |
| `GET` | `/api/asistente/historial` | Obtener historial de consultas | ✅ |

### 🔍 Búsquedas

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/busquedas` | Obtener búsquedas | ✅ |
| `POST` | `/api/busquedas` | Registrar búsqueda | ✅ |
| `PUT` | `/api/busquedas/:id` | Actualizar búsqueda | ✅ |
| `DELETE` | `/api/busquedas/:id` | Eliminar búsqueda | ✅ |

### 📅 Turnos

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/turnos` | Listar turnos básicos | ✅ |
| `GET` | `/api/turnos/full/all` | Turnos completos (admin) | ✅ |
| `GET` | `/api/turnos/:id` | Turnos por usuario | ✅ |
| `GET` | `/api/turnos/conSala/:id` | Turno con sala | ✅ |
| `POST` | `/api/turnos` | Crear turno | ✅ |
| `PUT` | `/api/turnos/:id` | Actualizar turno | ✅ |
| `DELETE` | `/api/turnos/:id` | Eliminar turno | ✅ |

### 🏢 Salas

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/salas` | Listar salas | ✅ |
| `GET` | `/api/salas/:id` | Obtener sala por ID | ✅ |
| `POST` | `/api/salas` | Crear sala | ✅ |
| `DELETE` | `/api/salas/:id` | Eliminar sala | ✅ |

### 👤 Invitados

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/invitados/turno/:id_turno` | Invitados por turno | ✅ |
| `GET` | `/api/invitados/usuario/:id/pendientes` | Invitaciones pendientes | ✅ |
| `GET` | `/api/invitados/usuario/:id/aceptados` | Turnos aceptados | ✅ |
| `POST` | `/api/invitados` | Crear invitación | ✅ |
| `PUT` | `/api/invitados/:id` | Actualizar invitación | ✅ |

## 🏗️ Arquitectura del Proyecto

```
biblioteca-inteligente-backend/
├── src/
│   ├── app.js                 # Configuración principal de Express
│   ├── config/
│   │   └── config.js          # Configuración de base de datos
│   ├── controllers/           # Lógica de negocio
│   │   ├── authController.js
│   │   ├── libroController.js
│   │   ├── usuarioController.js
│   │   ├── asistenteController.js
│   │   ├── turnoController.js
│   │   ├── salaController.js
│   │   ├── invitadoController.js
│   │   └── busquedaController.js
│   ├── middlewares/           # Middlewares personalizados
│   │   ├── auth.js           # Verificación JWT
│   │   └── authorize.js      # Control de roles
│   ├── models/               # Modelos Sequelize
│   │   ├── index.js         # Configuración ORM
│   │   ├── usuario.js
│   │   ├── libro.js
│   │   ├── busqueda.js
│   │   ├── prompt.js
│   │   ├── respuesta.js
│   │   ├── turnos.js
│   │   ├── salas.js
│   │   └── invitados_turno.js
│   ├── routes/              # Definición de rutas
│   │   ├── index.js
│   │   ├── authRoutes.js
│   │   ├── libroRoutes.js
│   │   ├── usuarioRoutes.js
│   │   ├── asistenteRoutes.js
│   │   ├── turnoRoutes.js
│   │   ├── salaRoutes.js
│   │   ├── invitadoRoutes.js
│   │   └── busquedaRoutes.js
│   └── services/            # Servicios de negocio
│       └── libroService.js
├── server.js               # Punto de entrada
├── package.json
├── render.yaml            # Configuración Render
└── README.md
```

## 🗄️ Modelo de Base de Datos

### Entidades Principales

- **👤 Usuario**: Gestión de usuarios del sistema
- **📖 Libro**: Catálogo bibliográfico
- **🔍 Búsqueda**: Historial de búsquedas de usuarios
- **💬 Prompt/Respuesta**: Conversaciones con IA
- **📅 Turno**: Reservas de salas
- **🏢 Sala**: Espacios disponibles
- **👥 InvitadosTurno**: Invitaciones grupales

### Relaciones

```mermaid
erDiagram
    Usuario ||--o{ Busqueda : realiza
    Usuario ||--o{ Prompt : envía
    Usuario ||--o{ Turno : crea
    Usuario ||--o{ InvitadosTurno : participa
    Prompt ||--|| Respuesta : genera
    Turno ||--|| Sala : reserva
    Turno ||--o{ InvitadosTurno : incluye
```

## 🔒 Seguridad

- **🔐 JWT Authentication**: Tokens seguros con expiración
- **🔑 Password Hashing**: bcrypt con salt rounds
- **🛡️ CORS Configuration**: Control de orígenes permitidos
- **📊 Input Validation**: express-validator para sanitización
- **🏷️ Role-based Access**: Control de permisos por rol

## 🚀 Scripts Disponibles

```bash
# Desarrollo con hot-reload
npm run dev

# Producción
npm start

# Ejecutar tests de base de datos
npm run test-db

# Cargar datos de prueba
node runSeed.js
```

## 🌍 Variables de Entorno

| Variable | Descripción | Requerida | Ejemplo |
|----------|-------------|-----------|---------|
| `DATABASE_URL` | URL completa de PostgreSQL | ✅ | `postgresql://user:pass@host:5432/db` |
| `JWT_SECRET` | Secreto para JWT | ✅ | `mi_secreto_super_seguro` |
| `OPENROUTER_KEY` | API Key de OpenRouter | ✅ | `sk-or-...` |
| `NODE_ENV` | Entorno de ejecución | ❌ | `development` |
| `PORT` | Puerto del servidor | ❌ | `3000` |
| `FRONTEND_URL` | URL del frontend | ❌ | `http://localhost:5173` |

## 📤 Deployment

### Render (Backend)

1. Conectar repositorio a Render
2. Configurar variables de entorno
3. El archivo `render.yaml` automatiza el deployment

### Configuración de Producción

```yaml
# render.yaml
services:
  - type: web
    name: biblioteca-inteligente-backend
    env: node
    buildCommand: cd biblioteca-inteligente-backend && npm install
    startCommand: cd biblioteca-inteligente-backend && npm start
```

## 🧪 Testing

### Endpoint de Prueba

```bash
# Verificar que el servidor está funcionando
curl http://localhost:3000/test
# Respuesta esperada: "OK"
```

### Pruebas de API

```bash
# Registrar usuario
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test User","email":"test@example.com","dni":"12345678","password":"123456","rol":"usuario"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"dni":"12345678","password":"123456"}'

# Obtener libros
curl http://localhost:3000/api/libros
```

## 🤝 Contribución

1. **Fork** el proyecto
2. Crear una **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** los cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la branch (`git push origin feature/AmazingFeature`)
5. Abrir un **Pull Request**

### Convenciones de Código

- Usar **camelCase** para variables y funciones
- Usar **PascalCase** para clases y modelos
- Comentarios en **español**
- Usar **async/await** en lugar de Promises
- Validar entrada en todos los endpoints

## 🐛 Troubleshooting

### Problemas Comunes

#### Error de Conexión a Base de Datos
```bash
# Verificar que PostgreSQL está ejecutándose
pg_isready -h localhost -p 5432

# Verificar credenciales en .env
echo $DATABASE_URL
```

#### Error de JWT
```bash
# Verificar que JWT_SECRET está configurado
echo $JWT_SECRET
```

#### Error de CORS
```bash
# Verificar que FRONTEND_URL está configurado correctamente
echo $FRONTEND_URL
```

#### Puerto en Uso
```bash
# Cambiar puerto en .env o terminar proceso
lsof -ti:3000 | xargs kill -9
```

### Logs Útiles

```bash
# Ver logs de la aplicación
npm run dev

# Ver logs de base de datos (activar logging en config.js)
# logging: console.log
```

## 📊 Monitoreo y Salud

### Health Check Endpoints

- `GET /test` - Estado básico del servidor
- `GET /api/libros` - Verificación de base de datos

### Métricas Importantes

- **Tiempo de respuesta** de la API
- **Conexiones activas** a la base de datos
- **Uso de memoria** del proceso Node.js
- **Rate limiting** por IP

## 🔄 Versionado

Utilizamos [SemVer](http://semver.org/) para el versionado. Para ver las versiones disponibles, consulta los [tags de este repositorio](https://github.com/tu-usuario/biblioteca-backend/tags).

### Changelog

- **v1.0.0** - Release inicial
  - Sistema completo de autenticación
  - CRUD de libros y usuarios
  - Integración con OpenRouter IA
  - Sistema de turnos y salas

## 📜 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 👨‍💻 Equipo de Desarrollo

### Desarrolladores Principales

- **[Tu Nombre]** - *Desarrollo Full Stack* - [@tu-github](https://github.com/tu-usuario)
- **[Colaborador 1]** - *Backend Developer* - [@colaborador1](https://github.com/colaborador1)
- **[Colaborador 2]** - *Frontend Developer* - [@colaborador2](https://github.com/colaborador2)

## 📧 Contacto y Soporte

### 📞 Información de Contacto

- **Email**: bibliotech.soporte@universidad.edu.ar
- **Teléfono**: +54 11 1234-5678
- **Horarios**: Lunes a Viernes, 9:00 - 18:00 ART

### 🐛 Reportar Issues

Si encuentras un bug o tienes una sugerencia:

1. Revisa los [issues existentes](https://github.com/tu-usuario/biblioteca-backend/issues)
2. Crea un [nuevo issue](https://github.com/tu-usuario/biblioteca-backend/issues/new) con:
   - Descripción detallada del problema
   - Pasos para reproducir
   - Comportamiento esperado vs. actual
   - Screenshots (si aplica)
   - Información del entorno

### 💬 Discusiones

Para preguntas generales, únete a nuestras [Discussions](https://github.com/tu-usuario/biblioteca-backend/discussions).

## 🌟 Agradecimientos

- **OpenRouter** por la integración de IA
- **Sequelize Team** por el excelente ORM
- **Express.js Community** por el framework
- **Render** por el hosting confiable
- **Universidad [Nombre]** por el apoyo al proyecto

---

<div align="center">

**⭐ Si este proyecto te fue útil, considera darle una estrella ⭐**

[🚀 Ver Demo](https://tu-frontend.vercel.app) • [📖 Documentación](https://github.com/tu-usuario/biblioteca-backend/wiki) • [🐛 Reportar Bug](https://github.com/tu-usuario/biblioteca-backend/issues)

*Hecho con ❤️ para la comunidad educativa*

</div>
