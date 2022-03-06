FROM node:14 AS Development
WORKDIR /popup-foodies/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]