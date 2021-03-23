# URL Shortening Express, Graphql  

## How to run the project

Install dependencies:

```shell
npm install
```

Setup the Database (Postgresql): Just run `database.sql`  

In `.env` file, set the database connection string (*DB_CONNECTION*) 

Run the project !   

```shell
npm start
```

To run the Jest tests

```shell
npm test
```


To check the GraphQL API browse http://localhost:3400/graphql and run:

```GraphQL
mutation {
    shortenUrl(longUrl:"http://sample.com/address"){
        longUrl
    	url
    }
}
```

To build the docker image:
```shell
npm run docker-build
```

To run the docker container:

```shell
docker run -it --rm \
    --network host \
    --name url-shortening\
    -p 3400:3400 \
    -e PORT=3400 \
    -e NODE_ENV=production \
    -e DB_CONNECTION=postgres://postgres:123@localhost:5432/werkspot \
    -e SHORTEN_DOMAIN=wor.ks \
    -e LOGS_PATH=../logs \
   url-shortening
```
