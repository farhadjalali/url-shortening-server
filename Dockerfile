FROM node:12 AS build

ADD ./dist  ./dist
WORKDIR /dist
RUN npm ci --only=production

# Copy application with its dependencies into distroless image
FROM gcr.io/distroless/nodejs

COPY --from=build /dist /dist
WORKDIR /dist
CMD [ "index.js" ]
