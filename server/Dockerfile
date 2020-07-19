# Build from  LTS version of node (version 12)
FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app

# Define app diretory inside image
WORKDIR /usr/src/app

# package.json AND package-lock.json are copied where available 
COPY package*.json /usr/src/app/

# install modules
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Bind app to port 3000
EXPOSE 3000

# Command to run app
# CMD [ "./node_modules/nodemon/bin/nodemon.js", "./bin/www" ]
CMD [ "node", "./bin/www" ]