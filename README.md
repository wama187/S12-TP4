# TP4 - Express + Postgres con Docker Compose

Este repositorio contiene una aplicación Express simple y una configuración de PostgreSQL usando Docker Compose.

Servicios:
- web: aplicación Node/Express que escucha en el puerto 3000
- db: PostgreSQL 15 (imagen oficial)

Instrucciones rápidas:

1. Construir y levantar los servicios:

```powershell
cd TP4
docker compose up --build
```

2. Verificar:
- Abrir http://localhost:3000/usuarios en tu navegador. Deberías ver una lista vacia.


