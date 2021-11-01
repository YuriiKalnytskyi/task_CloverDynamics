FROM node:14

WORKDIR ./src/usr/app/

COPY ./package*.json .

COPY ./package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm" ,"run", "dev"]