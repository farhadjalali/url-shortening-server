"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var typeDefs = "";
fs.readdirSync(__dirname).forEach(function (file) {
    if (path.extname(file) == ".graphql") {
        typeDefs += fs.readFileSync(path.join(__dirname, file), "utf8");
    }
});
exports.default = typeDefs;
