FROM node:14 AS Development
WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm","run","start"]