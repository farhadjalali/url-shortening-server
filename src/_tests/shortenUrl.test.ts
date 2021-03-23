import * as request from 'supertest'
import * as  express from 'express'
import {graphqlHTTP} from 'express-graphql'
import {buildSchema} from 'graphql'
import typeDefs from "../schema"
import {ILink, Link} from "../models"

test('createAuthor mutation', async () => {
	const app = express()

	app.use('/graphql', graphqlHTTP({
		schema: buildSchema(typeDefs)
	}))


	const query = `
    mutation {
      shortenUrl(input: {
        longUrl: "http://sample.com/address"
      }) {
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

	console.log('response', response)

	// const res = JSON.parse(response.text) as ILink
	// expect(res.longUrl).toEqual("http://sample.com/address")
	// expect(res.longUrl).toMatch("^http.+")

	// await Link.destroy({where: <ILink>{url: res.url}})
})
