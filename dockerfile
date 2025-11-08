
FROM node:latest

WORKDIR /myapp

COPY . /myapp

CMD [ "npm", "install" ]