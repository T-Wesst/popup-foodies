FROM node:14 AS Development
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run","start"]