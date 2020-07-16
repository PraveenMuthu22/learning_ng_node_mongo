# Build from  LTS version of node (version 12)
FROM node:12

# Define app diretory inside image
WORKDIR /usr/src/app

# package.json AND package-lock.json are copied where available 
COPY package*.json ./

# install modules
RUN npm install

# Bundle app source
COPY . .

# Bind app to port 8080
EXPOSE 8080

# Command to run app
CMD [ "node", "app.js" ]