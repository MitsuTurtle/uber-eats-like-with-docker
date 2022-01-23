FROM node:16.13.1-alpine  
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
ENTRYPOINT [ "yarn", "start" ]
