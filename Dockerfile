FROM node:lts
COPY . /usr/share/demo_app
WORKDIR /usr/share/demo_app
RUN npm i && npm run build
CMD ["npm","run","start"]
