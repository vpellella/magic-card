#stage 1
FROM node:alpine as stage
WORKDIR /usr/app
COPY ./package.json .
RUN npm install
COPY ./ ./
RUN npm run build


# #stage 2
FROM nginx:alpine
COPY --from=stage /usr/app/dist/magic-card-ui /usr/share/nginx/html
COPY --from=stage /usr/app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

