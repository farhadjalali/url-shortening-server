"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston = require("winston");
const types_1 = require("../types");
const path_1 = __importDefault(require("path"));
const moment = require("moment");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
};
winston.addColors(custom.colors);
exports.logger = winston.createLogger({
    levels: custom.levels,
    transports: [
        new winston.transports.Console({
            level: 'http',
            format: winston.format.combine(winston.format.simple(), winston.format.printf((msg) => winston.format.colorize().colorize(msg.level, `${msg.message}`)))
        }),
        new winston.transports.File({
            filename: path_1.default.join(process.env.LOGS_PATH, types_1.Constants.ERROR_LOG_FILE),
            // maxsize: mem.sysConfig.log.maxSize,
            level: 'error',
            format: winston.format.printf((info) => `${moment().format('DD-HH:mm:ss.SS')}  ${info.level}\t${info.message}`)
        }),
        new winston.transports.File({
            filename: path_1.default.join(process.env.LOGS_PATH, types_1.Constants.INFO_LOG_FILE),
            // maxsize: mem.sysConfig.log.maxSize,
            level: 'debug',
            format: winston.format.printf((info) => `${moment().format('DD-HH:mm:ss.SS')}  ${info.level}\t${info.message}`)
        }),
        new winston.transports.Http({ host: "localhost", port: 3009 }),
    ],
});
//# sourceMappingURL=logger.js.map