FROM node:latest

WORKDIR /usr/src/app

COPY package.json .

RUN npm install


#Solve the problem reinstaling bcrypt
CMD [ "npm", "uninstall", "bcrypt" ]
CMD [ "npm", "install", "bcrypt" ]

CMD [ "npm", "uninstall", "nodemailer" ]
CMD [ "npm", "install", "nodemailer" ]

COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 3333