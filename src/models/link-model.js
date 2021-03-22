"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkFactory = exports.Link = void 0;
const sequelize_1 = require("sequelize");
class Link extends sequelize_1.Model {
}
exports.Link = Link;
function linkFactory(sequelize) {
    return sequelize.define('link', {
        id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        long_url: { type: sequelize_1.DataTypes.TEXT },
        url: { type: sequelize_1.DataTypes.TEXT }
    }, {
        timestamps: true,
        schema: 'public',
    });
}
exports.linkFactory = linkFactory;
//# sourceMappingURL=link-model.js.map