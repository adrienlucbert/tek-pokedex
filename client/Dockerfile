FROM node:latest

COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
