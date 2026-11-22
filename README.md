# TaskFlow

TaskFlow es una aplicación React con API Node.js. Los usuarios se guardan en
SQL Server; proyectos, tareas y notificaciones se guardan en MongoDB.

## Requisitos previos

- Docker Desktop con Docker Compose.
- Git, si vas a clonar el repositorio.


## URLs y puertos

- Frontend: http://localhost:8080
- API: http://localhost:3000
- MongoDB: accesible solo dentro de la red de Compose en mongo:27017.
- SQL Server: accesible solo dentro de la red de Compose en sqlserver:1433.

El frontend envía sus solicitudes a /api; Nginx las reenvía al servicio API.
No se publican los puertos de las bases de datos en el host.

## Logs y detener

    docker compose logs -f
    docker compose down

docker compose down conserva los datos en los volúmenes nombrados.

## Borrar los datos persistentes

Este comando elimina los datos de MongoDB y SQL Server:

    docker compose down -v

## Servicios de datos

- SQL Server: usuarios y autenticación.
- MongoDB: tareas, proyectos y notificaciones.

El archivo docker-compose.yml incluye ambos motores de base de datos además de
la API y el frontend para que todo el stack sea reproducible con Docker.

# TaskFlow

https://github.com/alejandrofrias24-collab/TaskFlow/actions/workflows/ci.yml/badge.svg
