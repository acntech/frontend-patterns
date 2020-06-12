FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node start
EXPOSE 3031