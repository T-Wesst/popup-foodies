FROM node:14 AS Development
WORKDIR /popup-foodies/client
COPY client/package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]