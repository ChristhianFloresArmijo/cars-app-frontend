# 1. Install dependencies only when needed
FROM node:17-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package*.json ./
RUN npm ci


# 2. Rebuild the source code only when needed
FROM node:17-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# This will do the trick, use the corresponding env file for each environment.
RUN npm run build

# 3. Production image, copy all the files and run next
FROM node:17-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ARG user=frontend
ARG gid=1000
ARG uid=1000

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001
RUN deluser --remove-home node
RUN addgroup --system --gid $gid ${user}
RUN adduser --system --uid $uid ${user}

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=${user}:${user} /app/.next/standalone ./
COPY --from=builder --chown=${user}:${user} /app/.next/static ./.next/static


USER ${user}

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]