FROM node:16 AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

FROM alpine:3.16.7


WORKDIR /app

RUN apk update && apk add npm

COPY --from=build /usr/src/app /app

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]



























# # Use an official Node runtime as a parent image


# # second trial

# # FROM node:16 AS stage1
# # # Set the working directory
# # WORKDIR /usr/src/app
# # # Copy the package.json and package-lock.json files
# # COPY package*.json ./
# # # Install the dependencies
# # RUN npm install
# # # Copy the app files
# # COPY . .
# # # Build the app
# # FROM alpine:3.16.7

# # WORKDIR /app
# # RUN apk update && apk add npm
# # COPY --from=stage1 /usr/src/app /app
# # RUN npm run build
# # RUN npm install -g serve
# # # Expose the port
# # EXPOSE 3000
# # # Run the app
# # CMD ["serve","-s", "start"]




# # Third trial
# # Use official Node.js image as the base image
# # FROM node:16-alpine as build

# # # Set working directory
# # WORKDIR /app

# # # Copy package.json and package-lock.json (if available)
# # COPY package*.json ./

# # # Install dependencies
# # RUN npm install

# # # Copy the entire project directory to the working directory
# # COPY . .

# # # Build the React app for production
# # RUN npm run build

# # # Stage 2: Serve the production build with Nginx
# # FROM nginx:alpine

# # # Copy the build output from the previous stage
# # COPY --from=build /app/build /usr/share/nginx/html

# # # Copy nginx configuration file
# # COPY nginx.conf /etc/nginx/conf.d/default.conf

# # # Expose port 80 to the outside world
# # EXPOSE 3000

# # # Start Nginx server
# # CMD ["nginx", "-g", "daemon off;"]
