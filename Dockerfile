FROM node:8.7

# Copy the current directory contents into the container at /app
ADD . /app

WORKDIR /app
