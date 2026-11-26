# TaskFlow

[![CI](https://github.com/alejandrofrias24-collab/taskflow/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/alejandrofrias24-collab/taskflow/actions/workflows/ci.yml)
[![CD](https://github.com/alejandrofrias24-collab/taskflow/actions/workflows/cd.yml/badge.svg?branch=main)](https://github.com/alejandrofrias24-collab/taskflow/actions/workflows/cd.yml)

TaskFlow es una aplicación React con API Node.js. Los usuarios se guardan en
SQL Server; proyectos, tareas y notificaciones se guardan en MongoDB.

## Requisitos previos

- Docker Desktop con Docker Compose.
- Git, si vas a clonar el repositorio.
- Node.js 22 y npm, si vas a ejecutar las comprobaciones localmente.

## Ejecutar con Docker

1. Copia `.env.example` como `.env` en la raíz del proyecto.
2. En `.env`, define una contraseña válida para SQL Server y un `JWT_SECRET` propio.
3. Construye e inicia el stack:

       docker compose up -d --build

4. Abre http://localhost:8080.

La API está disponible en http://localhost:3000. MongoDB y SQL Server solo son
accesibles dentro de la red de Compose. El frontend envía solicitudes a `/api` y
Nginx las reenvía a la API.

## Pipeline CI/CD

- En cada pull request hacia `main`, CI instala las dependencias de API y web,
  ejecuta lint y pruebas, compila el frontend y, después de que los trabajos
  `api` y `web` pasen, ejecuta `docker compose build`.
- Al hacer push o merge a `main`, CD construye y publica las imágenes en GitHub
  Container Registry (GHCR): `ghcr.io/alejandrofrias24-collab/taskflow-api` y
  `ghcr.io/alejandrofrias24-collab/taskflow-web`. Cada publicación de `main`
  recibe las etiquetas `sha-<commit>` y `latest`.
- Al publicar una etiqueta Git como `v1.0.0`, CD publica también `1.0.0` y `1.0`.
- El login a GHCR usa el `GITHUB_TOKEN` automático de GitHub Actions. No se guarda
  un token personal en el repositorio.
- Configura `VITE_API_URL` en **Settings → Secrets and variables → Actions → Variables**.
  Para esta aplicación, `/api` permite que Nginx reenvíe las solicitudes a la API.
- Protege `main` con una regla que exija pull request, los checks `api`, `web` y
  `docker`, y bloquee force push. La protección se configura en GitHub, no en
  este repositorio de archivos.

Comprobaciones locales desde cada carpeta:

    npm ci
    npm run lint
    npm test

En `frontend/`, también puedes ejecutar `npm run build`.

## URLs y puertos

- Frontend: http://localhost:8080
- API: http://localhost:3000
- MongoDB: `mongo:27017` dentro de la red de Compose.
- SQL Server: `sqlserver:1433` dentro de la red de Compose.

## Logs y detener

    docker compose logs -f
    docker compose down

`docker compose down` conserva los datos de los volúmenes nombrados.

## Borrar los datos persistentes

Este comando elimina los datos de MongoDB y SQL Server:

    docker compose down -v

## Servicios de datos

- SQL Server: usuarios y autenticación.
- MongoDB: tareas, proyectos y notificaciones.
