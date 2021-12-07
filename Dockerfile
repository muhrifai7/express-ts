FROM node:16.13.1-alpine

WORKDIR /app

COPY ./package.json .

RUN yarn install && yarn cache clean --force

COPY . .

RUN yarn run build

EXPOSE 4040

CMD [ "yarn", "start" ]