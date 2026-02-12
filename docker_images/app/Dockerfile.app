# Etapa 1: Dependencias
FROM node:20-alpine AS deps
WORKDIR /app

# Instalar pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copiar package.json y lockfile
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias (sin dev si prefieres más ligero)
RUN pnpm install --frozen-lockfile

# Etapa 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copiar dependencias ya instaladas
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Compilar Next.js
RUN pnpm build

# Etapa 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Copiar solo lo necesario para correr
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production

CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "3000"]
