FROM node:20-alpine2.0

WORKDIR /user-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]