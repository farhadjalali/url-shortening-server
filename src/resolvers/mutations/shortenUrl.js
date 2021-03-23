"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenUrl = void 0;
const models_1 = require("../../models");
const utils_1 = require("../../utils");
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function shortenUrl(_, { longUrl }) {
    const link = {
        longUrl: longUrl
    };
    const res = await models_1.Link.create(link);
    const hash = utils_1.generateHash(link.id);
    link.url = `https://${process.env.SHORTEN_DOMAIN}/` + hash;
    await models_1.Link.update({
        url: link.url
    }, {
        where: { id: res.id }
    });
    return link;
}
exports.shortenUrl = shortenUrl;
//# sourceMappingURL=shortenUrl.js.map