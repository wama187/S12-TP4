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

3. Envio de datos:
- Mediante Postman o cualquier otra herramienta, enviar datos de usuario con el método POST bajo el siguiente formato:
```
{
  "name": "usuario",
  "email": "usuario@gmail.com",
  "password": "1234"
}
```

