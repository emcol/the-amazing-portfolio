# --- Build stage -------------------------------------------------------------
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies from the lockfile for reproducible builds
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code and build the static export
COPY . .
RUN npm run build

# --- Runtime stage -----------------------------------------------------------
FROM node:22-alpine AS runner

WORKDIR /app

# `serve` ships a tiny static file server for the exported site
RUN npm install -g serve

# Copy only the static export produced by `next build` (output: 'export')
COPY --from=build /app/out ./out

EXPOSE 3000

CMD ["serve", "-s", "out", "-l", "3000"]
