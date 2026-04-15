# 1. Etapa de construcción
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Instalamos todas las dependencias para poder construir
RUN npm install
COPY . .
RUN npm run build

# 2. Etapa de ejecución (Producción)
FROM node:18-alpine AS runner
WORKDIR /app

# Seteamos el entorno a producción
ENV NODE_ENV production

# IMPORTANTE: Cloud Run requiere que Next.js escuche en el puerto que le asigne Google
ENV PORT 8080

# Copiamos solo lo necesario desde la etapa builder
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 8080

# Usamos el puerto dinámico para evitar errores en Cloud Run
CMD ["sh", "-c", "npm start -- -p ${PORT:-8080}"]