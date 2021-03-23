import {Sequelize} from "sequelize"
import {linkFactory} from "./link-model"
export {ILink} from "./link-model"

export const dbConfig = new Sequelize(process.env.DB_CONNECTION, {
	pool: {
		min: 0,
		max: 5,
		acquire: 30000,
		idle: 10000
	}
})

export const Link = linkFactory(dbConfig)
