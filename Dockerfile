FROM node:18.18.2 AS run

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "run", "preview" ]
