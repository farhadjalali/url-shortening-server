import winston = require('winston')
import {Constants} from "../types"
import path from "path"
import moment = require('moment')
import env from "dotenv"

env.config()
const logPath = process.env.LOGS_PATH || "../logs"

const custom = {
	levels: {
		error: 0,
		warn: 1,
		info: 2,
		verbose: 3,
		debug: 4,
		http: 5
	},
	colors: {
		error: 'red',
		warn: 'orange',
		info: 'yellow',
		verbose: 'blue',
		debug: 'gray',
		http: 'pink'
	}
}

winston.addColors(custom.colors)

export const logger = winston.createLogger({
	levels: custom.levels,

	transports: [
		new winston.transports.Console({
			level: 'http',
			format: winston.format.combine(
				winston.format.simple(),
				winston.format.printf((msg) => winston.format.colorize().colorize(msg.level, `${msg.message}`))
			)
		}),
		new winston.transports.File(
			{
				filename: path.join(logPath, Constants.ERROR_LOG_FILE),
				// maxsize: mem.sysConfig.log.maxSize,
				level: 'error',
				format: winston.format.printf((info) => `${moment().format('DD-HH:mm:ss.SS')}  ${info.level}\t${info.message}`)
			}
		),
		new winston.transports.File(
			{
				filename: path.join(logPath, Constants.INFO_LOG_FILE),
				// maxsize: mem.sysConfig.log.maxSize,
				level: 'debug',
				format: winston.format.printf((info) => `${moment().format('DD-HH:mm:ss.SS')}  ${info.level}\t${info.message}`)
			}
		),
		new winston.transports.Http({host: "localhost", port: 3009}),
	],
});
