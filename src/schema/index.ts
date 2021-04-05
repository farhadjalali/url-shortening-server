import {gql} from "apollo-server-lambda"

export const typeDefs = gql`
	type Query {
		"""
		Expanding the url
		"""
		expandUrl(
			"url input param"
			url: String!
		): String!
	}

	type Mutation {
		shortenUrl(longUrl: String!): Link
	}

	type Link {
		longUrl: String!
		url: String!
	}
`

export default typeDefs
