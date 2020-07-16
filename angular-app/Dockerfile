# 1
# Stage 1
# Create image based on the official Node 8 image from dockerhub

FROM node:8.11.2-alpine as node

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory

WORKDIR /usr/src/app

# Copy dependency definitions

COPY package*.json ./

# Install dependecies

RUN npm install

# Get all the code needed to run the app

COPY . .

# Run the angular in product
RUN npm run build

# Stage 2
FROM nginx:1.13.12-alpine

#copy dist content to html nginx folder, config nginx to point in index.html
COPY --from=node /usr/src/app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf


# 2

# # stage 1
# FROM node:11.15.0-alpine as build-step
# WORKDIR /app
# # COPY . .
# COPY package*.json ./
# RUN npm  install
# RUN npm run build

# # stage 2

# FROM nginx:alpine
# COPY --from=my-app-build /app/dist/angular-app /usr/share/nginx/html
# EXPOSE 4200

# 3

# FROM node:11.15.0-alpine as build-step
# WORKDIR /app
# COPY package*.json ./
# RUN npm --verbose install
# COPY . .
# EXPOSE 4200
# CMD npm run start