import * as env from "dotenv"
import schema from './schema'
import resolvers from './resolvers'

env.config()

import {ApolloServer, gql} from 'apollo-server-lambda'

const server = new ApolloServer({
    typeDefs: gql`${schema}`,
    resolvers,
    playground: true,
    introspection: true
})

exports.graphqlHandler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true,
    }
})