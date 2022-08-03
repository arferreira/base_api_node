FROM node:latest

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

#Solve the problem reinstaling bcrypt
CMD [ "npm", "uninstall", "bcrypt" ]
CMD [ "npm", "install", "bcrypt" ]

COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 3333