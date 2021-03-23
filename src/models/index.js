"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.dbConfig = void 0;
var sequelize_1 = require("sequelize");
var link_model_1 = require("./link-model");
exports.dbConfig = new sequelize_1.Sequelize(process.env.DB_CONNECTION, {
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
});
exports.Link = link_model_1.linkFactory(exports.dbConfig);
