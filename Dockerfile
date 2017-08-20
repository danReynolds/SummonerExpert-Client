FROM node:8.4.0

# Set the working directory to /app
RUN mkdir /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app
