# specify the node base image with your desired version node:<version>
FROM node:14.17.3-buster

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","start"]
