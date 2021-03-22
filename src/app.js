"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const cors_1 = __importDefault(require("./middlewares/cors"));
const reponseTime_1 = __importDefault(require("./middlewares/reponseTime"));
const context_1 = __importDefault(require("./middlewares/context"));
const error_1 = __importDefault(require("./middlewares/error"));
exports.app = express();
exports.app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(reponseTime_1.default)
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(context_1.default)
    .use(cors_1.default)
    .use(error_1.default);
//# sourceMappingURL=app.js.map