FROM node:latest 
WORKDIR /ORM_MONGODB 
COPY package*.json ./ 
RUN npm install 
COPY . . 
EXPOSE 4006 
CMD [ "node", "index.js" ] 