import dotenv from "dotenv"
import assert from "assert"

dotenv.config()

assert(process.env.DB_CONNECTION, "Global environment variable DB_CONNECTION is needed!")

export default {
	port: +process.env.PORT || 3401,

	logPath: __dirname + '/logs',

	database: {
		connection: process.env.DB_CONNECTION,

		migrations: {
			directory: __dirname + '/migrations',
		},

		seeds: {
			directory: __dirname + '/seeds',
		},
	},

	domain: process.env.SHORTEN_DOMAIN || "wor.ks"
}
