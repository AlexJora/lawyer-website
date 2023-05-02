# Build client
FROM node:14-alpine AS client-builder

WORKDIR /app/client
COPY ./client/package.json ./client/package-lock.json ./
RUN npm ci
COPY ./client .
RUN npm run build

# Build server
FROM node:14-alpine AS server-builder

WORKDIR /app/server
COPY ./server/package.json ./server/package-lock.json ./
RUN npm ci
COPY ./server .
RUN npm run build

# Create production image
FROM node:14-alpine

WORKDIR /app
COPY --from=client-builder /app/client/build ./client
COPY --from=server-builder /app/server/build ./server
COPY ./server/package.json ./server/package-lock.json ./
RUN npm ci --only=production

EXPOSE 8080

CMD ["npm", "start"]
