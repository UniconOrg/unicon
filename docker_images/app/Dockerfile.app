# =============================================================================
# Dockerfile de produccion - Unicon Landing
# Multi-stage build con Bun (deps + build) y Node.js (runner standalone)
# =============================================================================

# ---------------------------------------------------------------------------
# Etapa 1: Dependencias
# Instala todas las dependencias del proyecto usando bun
# ---------------------------------------------------------------------------
FROM oven/bun:1-alpine AS deps
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json bun.lock ./

# Instalar dependencias con lockfile estricto
RUN bun install --frozen-lockfile

# ---------------------------------------------------------------------------
# Etapa 2: Builder
# Compila la aplicacion Next.js en modo standalone
# ---------------------------------------------------------------------------
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Desactivar telemetria de Next.js durante el build
ENV NEXT_TELEMETRY_DISABLED=1

# Copiar dependencias instaladas
COPY --from=deps /app/node_modules ./node_modules

# Copiar codigo fuente
COPY . .

# Compilar la aplicacion
RUN bun run build

# ---------------------------------------------------------------------------
# Etapa 3: Runner
# Imagen minima de produccion con solo el output standalone
# Next.js standalone genera un servidor Node.js puro, no necesita bun
# ---------------------------------------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app

# Desactivar telemetria en runtime
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV PORT=3000

# Crear usuario no-root para seguridad
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copiar archivos estaticos publicos
COPY --from=builder /app/public ./public

# Crear directorio para cache de Next.js con permisos correctos
RUN mkdir -p .next && chown nextjs:nodejs .next

# Copiar output standalone (incluye server.js y dependencias minimas)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cambiar a usuario no-root
USER nextjs

EXPOSE 3000

# Healthcheck para verificar que la aplicacion responde
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
