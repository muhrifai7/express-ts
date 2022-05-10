FROM node:16.13.1-alpine

WORKDIR /app

COPY ./package.json .

RUN yarn install && yarn cache clean --force

COPY . .

RUN yarn run build

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

EXPOSE 4040

CMD [ "/wait","yarn", "start" ]