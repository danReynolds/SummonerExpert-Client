FROM node:8.7

# Set the working directory to /app
RUN mkdir /app
WORKDIR /app

# Add Ruby dependencies necessary for deployment
RUN gem install sshkit rake

# Copy the current directory contents into the container at /app
ADD . /app
