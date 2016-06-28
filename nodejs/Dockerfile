FROM node:slim
RUN apt-get update && apt-get install -y git
RUN npm install -g gulp bower nodemon
WORKDIR /src
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
CMD ["/docker-entrypoint.sh"]
