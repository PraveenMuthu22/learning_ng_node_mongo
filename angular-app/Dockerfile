# Build from Node version 11
FROM node:11.15.0-alpine as build-step

# Define app directory inside image
WORKDIR /app

# package.json AND package-lock.json are copied where available 
COPY package*.json /app/

# install modules
RUN npm install

# Bundle app source
COPY . /app/

# Port to expose
EXPOSE 4200

# command to run app
CMD npm run start