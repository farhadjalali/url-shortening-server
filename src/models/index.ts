import {Sequelize} from "sequelize"
import {linkFactory} from "./link-model"
import assert from "assert";
import config from "../config";

export {ILink} from "./link-model"

export const dbConfig = new Sequelize(config.database.connection, {
	pool: {
		min: 0,
		max: 5,
		acquire: 30000,
		idle: 10000
	}
})

export const Link = linkFactory(dbConfig)
