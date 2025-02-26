# Gunakan image resmi Bun
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Salin dan install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Salin seluruh proyek setelah dependencies terinstall (untuk caching)
COPY . .

# Build aplikasi Next.js
RUN bun run build

# Final image untuk menjalankan Next.js
FROM oven/bun:1 AS release
WORKDIR /usr/src/app

# Salin node_modules dan hasil build
COPY --from=base /usr/src/app/node_modules ./node_modules
COPY --from=base /usr/src/app/public ./public
COPY --from=base /usr/src/app/.next ./.next
COPY --from=base /usr/src/app/package.json ./package.json

# Jalankan aplikasi Next.js di production
EXPOSE 3000
CMD ["bun", "run", "start"]
