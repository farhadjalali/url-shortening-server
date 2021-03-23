"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.dbConfig = void 0;
const sequelize_1 = require("sequelize");
const link_model_1 = require("./link-model");
const assert_1 = __importDefault(require("assert"));
assert_1.default(process.env.DB_CONNECTION, `Environment variable DB_CONNECTION is expected`);
exports.dbConfig = new sequelize_1.Sequelize(process.env.DB_CONNECTION, {
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
});
exports.Link = link_model_1.linkFactory(exports.dbConfig);
//# sourceMappingURL=index.js.map