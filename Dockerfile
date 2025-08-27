# deps
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# generate prisma client (prisma folder now exists)
RUN npx prisma generate
RUN npm run build

# run (Next standalone is optional but nice)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# If you use Next "standalone" (set in next.config.js: module.exports = { output: 'standalone' })
# Uncomment the 4 lines below and ensure your build produced .next/standalone
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static
# COPY --from=builder /app/prisma ./prisma

# If not using standalone, copy everything (simpler, slightly larger image)
COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]
