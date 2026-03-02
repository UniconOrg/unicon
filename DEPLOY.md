# Guia de Deploy y Desarrollo Local

Guia rapida para levantar el proyecto en local con Docker y entender el flujo de deploy a produccion.

## Requisitos

- [Docker](https://docs.docker.com/get-docker/) y Docker Compose
- [Make](https://www.gnu.org/software/make/) (incluido en la mayoria de sistemas Linux/macOS)
- [Bun](https://bun.sh/) (solo si quieres correr fuera de Docker)

## Inicio rapido (desarrollo local)

```bash
# 1. Clonar el repo y entrar al directorio
git clone <repo-url> && cd unicon

# 2. Copiar variables de entorno
cp .env.example .env

# 3. Levantar el contenedor
make up

# 4. Ver logs (Ctrl+C para salir)
make logs
```

La app estara disponible en **http://localhost:3001**

## Estructura Docker

```
docker_images/
├── app/
│   └── Dockerfile.app      # Produccion: multi-stage (bun build → node standalone)
└── local/
    └── Dockerfile           # Desarrollo: bun dev con hot-reload

docker-compose.yml           # Compose para desarrollo local (usa local/Dockerfile)
```

### Dockerfile de produccion (`docker_images/app/Dockerfile.app`)

Build multi-stage optimizado:

| Etapa | Base | Que hace |
|---|---|---|
| `deps` | `oven/bun:1-alpine` | Instala dependencias (`bun install --frozen-lockfile`) |
| `builder` | `oven/bun:1-alpine` | Compila la app (`bun run build`) |
| `runner` | `node:20-alpine` | Ejecuta el output standalone (`node server.js`) |

Caracteristicas:
- Usuario no-root (`nextjs:nodejs`, uid 1001)
- Healthcheck integrado
- Telemetria de Next.js desactivada
- Imagen final ~150MB

### Dockerfile de desarrollo (`docker_images/local/Dockerfile`)

- Base: `oven/bun:1-alpine` con herramientas dev (curl, git, bash)
- Auto-instala dependencias al iniciar
- Ejecuta `bun dev` para hot-reload
- Codigo fuente montado como volumen (cambios instantaneos)

## Comandos Make

Ejecuta `make help` para ver todos los comandos disponibles.

### Los mas usados

| Comando | Descripcion |
|---|---|
| `make up` | Levantar contenedor |
| `make down` | Bajar contenedor |
| `make logs` | Ver logs en tiempo real |
| `make restart` | Reiniciar contenedor |
| `make shell` | Entrar al contenedor |
| `make install` | Instalar dependencias (bun) |
| `make lint` | Ejecutar ESLint |
| `make rebuild` | Reconstruir todo desde cero |
| `make status` | Ver estado del contenedor |
| `make info` | Informacion completa del proyecto |

### Cuando algo no funciona

```bash
# Los cambios no se reflejan
make fix-cambios

# Algo raro con dependencias
make destroy
make build
make up

# Nuclear: eliminar absolutamente todo
make nuke
make build
make up
```

## Variables de entorno

Archivo `.env` (copiado de `.env.example`):

| Variable | Default | Descripcion |
|---|---|---|
| `NODE_ENV` | `development` | Entorno de ejecucion |
| `APP_TIMEZONE` | `America/Mexico_City` | Zona horaria del contenedor |
| `APP_PORT` | `3001` | Puerto expuesto en el host |
| `API_BASE_URL` | _(vacio)_ | URL base de la API backend |

## CI/CD (GitHub Actions)

El deploy automatico se maneja con GitHub Actions. Ver [.github/workflows/README.md](.github/workflows/README.md) para documentacion completa.

### Flujo resumido

```
Push a dev  → Build imagen → Push a registry → Deploy development (Dokploy)
Push a main → Build imagen → Push a registry → Deploy production  (Dokploy)
```

### Configuracion requerida en GitHub

**Variables** (Settings > Variables > Actions):
- `BRANCH_TAG_MAP` = `{"dev":"dev","main":"latest"}`
- `REGISTRY_PROJECT` = namespace del registry
- `REGISTRY_IMAGE_NAME` = nombre de la imagen
- `REGISTRY_URL` = URL del registry (opcional, default: docker.io)

**Secrets** (Settings > Secrets > Actions):
- `REGISTRY_USERNAME`
- `REGISTRY_PASSWORD`

**Environments** (`development` y `production`):
- `DOKPLOY_DEPLOY_WEBHOOK_URL` (secret por environment)

## Verificacion

```bash
# Verificar que el contenedor de desarrollo compila
docker compose build

# Verificar que la app arranca
make up && make logs

# Verificar build de produccion
docker build -f docker_images/app/Dockerfile.app .

# Verificar linter
make lint
```
