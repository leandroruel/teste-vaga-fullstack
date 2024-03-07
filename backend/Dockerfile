FROM node:18

WORKDIR /usr/www/app

COPY . .

RUN npm install

ENV PORT=$PORT
EXPOSE $PORT

CMD ["npm", "start"]
