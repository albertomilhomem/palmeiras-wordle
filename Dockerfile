FROM node:16.14.0-alpine3.14 AS builder
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.20.2-alpine
COPY --from=0 /app/build /usr/share/nginx/html
