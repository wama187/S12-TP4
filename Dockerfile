FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm install --production || true

COPY src ./src

EXPOSE 3000
CMD ["node", "src/index.js"]
