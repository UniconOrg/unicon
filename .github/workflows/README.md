# GitHub Actions Workflows

Este directorio contiene los workflows de CI/CD para Unicon Landing.

## Archivos

### `main.yml`
Workflow principal de CI/CD que maneja:
- Build de imagenes Docker
- Push a registry (Docker Hub o custom)
- Deployment a environments (development, production)

**Triggers:**
- Push a `main` o `dev`
- Pull Request a `main` o `dev`
- Manual via workflow_dispatch

### `deploy-reusable.yml`
Workflow reutilizable para deployments a Dokploy.

**Uso:** Llamado por `main.yml` para cada environment.

## Flujo

```
Push/PR a main o dev
       |
  Debug context
       |
  Validate config (vars + secrets)
       |
  Determine tag & version (via BRANCH_TAG_MAP)
       |
  Login to registry
       |
  Build image (docker_images/app/Dockerfile.app)
       |
  Push images (solo en push/workflow_dispatch, no en PRs)
       |
  Build summary
       |
  Deploy (segun branch)
    ├── dev  → deploy-development (Dokploy webhook)
    └── main → deploy-production  (Dokploy webhook)
```

## Variables y Secrets requeridos

### Variables (Settings > Variables > Actions)

| Variable | Ejemplo | Descripcion |
|---|---|---|
| `BRANCH_TAG_MAP` | `{"dev":"dev","main":"latest"}` | Mapeo branch → tag de Docker |
| `REGISTRY_PROJECT` | `miorg` | Proyecto/namespace del registry |
| `REGISTRY_IMAGE_NAME` | `unicon-landing` | Nombre de la imagen |
| `REGISTRY_URL` | `docker.io` | URL del registry (opcional, default: docker.io) |

### Secrets (Settings > Secrets > Actions)

| Secret | Descripcion |
|---|---|
| `REGISTRY_USERNAME` | Usuario del registry |
| `REGISTRY_PASSWORD` | Password/token del registry |

### Environments (Settings > Environments)

Crear dos environments: `development` y `production`.

Cada environment necesita:

| Secret | Descripcion |
|---|---|
| `DOKPLOY_DEPLOY_WEBHOOK_URL` | URL del webhook de Dokploy para trigger deploy |

## Uso rapido

### Ejecutar manualmente
1. Ve a Actions > CI/CD
2. Click "Run workflow"
3. Selecciona branch (`main` o `dev`)
4. Click "Run workflow"

### Ver logs
1. Ve a la pestana **Actions**
2. Click en el workflow ejecutado
3. Click en cada job para ver logs detallados

## Seguridad

- Los secrets nunca se muestran en logs
- Los environments de production pueden configurarse con aprobacion manual
- Los deployments usan GitHub Environments para aislamiento
- Las imagenes de Docker se pushean solo en push/workflow_dispatch (no en PRs)
