# Stage 1 — Build
# We use a full Node image to install dependencies and compile the Next.js app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

# Stage 2 — Run
# We copy only what is needed to run, keeping the final image small
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]