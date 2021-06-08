FROM node:14-alpine

WORKDIR /usr/src/app
COPY . .
EXPOSE 3000

RUN ln -s /usr/src/app/files/image.jpg /usr/src/app/src/.

RUN npm install

CMD npm start