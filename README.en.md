<div align="center">

# 📚 BiblioTech — Backend API

**REST API for the BiblioTech smart library system. Node.js + Express 5 + Sequelize + PostgreSQL + JWT + OpenRouter AI.**

[![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.1-black?logo=express)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Deploy](https://img.shields.io/badge/Deploy-Render-46E3B7?logo=render)](https://repositorio-backend-bibliotecainteligente.onrender.com/api/health)

**[🚀 Demo frontend](https://bibliotechjf.vercel.app) · [⚡ Live API](https://repositorio-backend-bibliotecainteligente.onrender.com/api/health) · [📦 Repo](https://github.com/FelipeDiazAimar/Repositorio-Backend-BibliotecaInteligente) · [🇪🇸 Español](README.md)**

</div>

## What is it?

REST API for smart library management: JWT auth with roles, book catalog CRUD with cover uploads (Multer), OpenRouter AI assistant (`axios` + `jsonrepair`), study-room bookings with guest invites, search history, room admin, request validation (`express-validator`), Swagger docs (`/api-docs`), logging (`morgan`), CORS.

## Demo mode (no DB needed)

With `DEMO_MODE=true` (or no `.env`) the server still boots: `GET /api/health` → `{status: ok, demo: true}`, `GET /api/libros` → 5 sample books, `POST /api/asistente/ask` → deterministic `[demo]` stub. Everything else answers JSON `503`. Idempotent seed (`node runSeed.js`) never deletes data; `node test-db.js` is a read-only diagnostic.

## Quick Start

```bash
git clone https://github.com/FelipeDiazAimar/Repositorio-Backend-BibliotecaInteligente.git
cd Repositorio-Backend-BibliotecaInteligente/biblioteca-inteligente-backend
npm install
node server.js        # or npm run dev (nodemon)
# 👉 http://localhost:3000/api/health
```

Real mode: `DEMO_MODE=false` + Postgres (`DATABASE_URL` or `DB_HOST/PORT/NAME/USER/PASS`) + long `JWT_SECRET` (login/register answer 500 without it) + `OPENROUTER_KEY` + `CORS_ORIGIN` (Vite origin). Scripts: `start` (`node server.js`), `dev` (nodemon). Stack: Express `5.1`, Sequelize `6.37`, `pg 8.16`, JWT `9.0`, bcrypt `6.0`, Multer `2.0`, Axios `1.9`, Swagger `6.2/5.0`.

## API (base `/api`)

Auth (`POST /auth/register|/login`, `GET /auth/me`) · Books (`GET/POST /api/libros`, `PUT/DELETE /:id`) · Assistant (`POST /api/asistente/ask`) · Bookings (`GET/POST /api/turnos` + guests) · Rooms (`GET /api/salas`) · History (`GET /api/historial`) · Health (`GET /api/health`). Full reference with mermaid DB model in `README.md`.

Deploy on Render (`render.yaml`, start `node server.js`) with `DATABASE_URL`, `JWT_SECRET`, `OPENROUTER_KEY`, `CORS_ORIGIN`. Frontend live: https://bibliotechjf.vercel.app.

## Author

**Felipe Diaz Aimar** — https://www.linkedin.com/in/felipe-aimar/ · felipediazaimar@gmail.com · https://github.com/FelipeDiazAimar · MIT.
