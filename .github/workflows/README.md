# 🔄 GitHub Actions Workflows

Este directorio contiene los workflows de CI/CD para el proyecto.

## 📁 Archivos

### `main.yml`
Workflow principal de CI/CD que maneja:
- 🏗️ Build de imágenes Docker
- 📤 Push a registry (Docker Hub o custom)
- 🚀 Deployment a environments (development, staging, production)

**Triggers:**
- Push a `main`, `development` o `staging`
- Pull Request a `main`, `development` o `staging`
- Manual via workflow_dispatch

### `deploy-reusable.yml`
Workflow reutilizable para deployments a Dokploy.

**Uso:** Llamado por `main.yml` para cada environment.


## 🚀 Uso Rápido

### Ver logs
1. Ve a la pestaña **Actions**
2. Click en el workflow ejecutado
3. Click en cada job para ver logs detallados

### Re-ejecutar workflow
1. Ve a Actions
2. Click en el workflow
3. Click "Re-run all jobs"

### Ejecutar manualmente
1. Ve a Actions → CI/CD
2. Click "Run workflow"
3. Selecciona branch
4. Click "Run workflow"

## 🎯 Flujo Normal

```
Push to development
    ↓
Debug context ✅
    ↓
Validate config ✅
    ↓
Determine tag & version ✅
    ↓
Login to registry ✅
    ↓
Create rollback tag ✅
    ↓
Build image ✅
    ↓
Push images ✅
    ↓
Build summary ✅
    ↓
Deploy to Development ✅
```

## 🔒 Seguridad

- Secrets nunca se muestran en logs
- Los environments de production pueden requerir aprobación
- Los deployments usan GitHub Environments para aislamiento

