"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandUrl = void 0;
const models_1 = require("../../models");
async function expandUrl(_, { hash }) {
    return await models_1.Link.findOne({ raw: true, where: { hash: url } });
}
exports.expandUrl = expandUrl;
//# sourceMappingURL=index.js.map