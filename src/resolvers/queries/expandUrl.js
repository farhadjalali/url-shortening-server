"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandUrl = void 0;
const models_1 = require("../../models");
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function expandUrl(_, { url }) {
    const link = await models_1.Link.findOne({ raw: true, where: { url } });
    if (link)
        return link.longUrl;
    else
        return null;
}
exports.expandUrl = expandUrl;
//# sourceMappingURL=expandUrl.js.map