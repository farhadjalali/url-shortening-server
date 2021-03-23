import {Sequelize} from "sequelize"
import {linkFactory} from "./link-model"
import assert from "assert";

export {ILink} from "./link-model"

assert(process.env.DB_CONNECTION, `Environment variable DB_CONNECTION is expected`)

export const dbConfig = new Sequelize(process.env.DB_CONNECTION, {
	pool: {
		min: 0,
		max: 5,
		acquire: 30000,
		idle: 10000
	}
})

export const Link = linkFactory(dbConfig)
