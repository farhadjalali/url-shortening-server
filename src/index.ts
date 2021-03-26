import {ApolloServer} from "apollo-server-express"
import {logger} from "./utils/logger"
import resolvers from "./resolvers"
import typeDefs from "./schema";
import {app} from './app'
import {IExpressRequest} from "./types";

async function start(): Promise<void> {
	console.log(`Starting web service ...`)

	const server = new ApolloServer({
		typeDefs: typeDefs,
		resolvers,
		playground: true,
		context: ({req}) => (<IExpressRequest>req).context,
	});

	server.applyMiddleware({app});

	app.listen(process.env.PORT, async () => {
		logger.info(`Server started on http://127.0.0.1:${process.env.PORT}`)
	});
}

start().catch(reason => {
	console.error(`Starting server failed!`, reason)
	process.exit(1)
})
