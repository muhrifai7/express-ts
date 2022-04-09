FROM node:11-alpine

# RUN mkdir -p /usr/src/app

WORKDIR /src/

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]