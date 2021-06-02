FROM node:14.8
FROM keymetrics/pm2:14-alpine
LABEL maintainer = "Ray"

# Copy source files from host computer to the container
COPY / /app

#install package and compile files
WORKDIR /app
RUN yarn
RUN yarn build

ENTRYPOINT ["pm2-runtime", "start", "ecosystem.config.js"]

# Specify port app runs on
EXPOSE 3000