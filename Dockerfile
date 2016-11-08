# source image from https://hub.docker.com/
FROM node:6.7-slim

# set path used by nodejs to lookup node_modules
ENV NODE_PATH /app/embed/node_modules

# extend default binary lookup files to allow usage of binary files without full path specified
ENV PATH $PATH:./node_modules/.bin:/app/embed/node_modules/.bin

# directory where all commands are executed ENTRYPOINT, CMD, RUN
WORKDIR /app/embed

# add package.json during image build to be able to do npm install
COPY . /app/embed

# run npm install
RUN cd /app/embed && npm i && npm run build

# default command to be executed on 'docker run'/'soos' command
CMD [ "npm", "run", "serve:prod" ]
 
