import * as request from 'supertest'
import * as env from "dotenv";

env.config()
import * as  express from 'express'
import {graphqlHTTP} from 'express-graphql'
import typeDefs from "../schema"
import {makeExecutableSchema} from 'graphql-tools'
import resolvers from "../resolvers"
import {ILink, Link} from "../models";

const graphqlSchema = makeExecutableSchema({typeDefs, resolvers})

test('shortenUrl mutation', async () => {
	const app = express()

	app.use('/graphql', graphqlHTTP({
		schema: graphqlSchema,
	}))

	const query = `
    mutation {
  		shortenUrl(longUrl:"http://sample.com/address"){
    		longUrl
    		url
  		}
	}
  `
	const response = await request(app)
		.post('/graphql')
		.type('json')
		.send(JSON.stringify({query}))

	expect(response.statusCode).toEqual(200)

	const {data} = JSON.parse(response.text)
	const link = data.shortenUrl as ILink
	expect(link.longUrl).toEqual('http://sample.com/address')
	expect(link.url).toMatch(/https:\/\/wor.ks\/\w+/)

	// Remove the create link from database
	await Link.destroy({where: <ILink>{url: link.url}})
})
