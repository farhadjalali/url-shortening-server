"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenUrl = void 0;
const models_1 = require("../../models");
const utils_1 = require("../../utils");
async function shortenUrl(_, { longUrl }) {
    const link = {
        long_url: longUrl
    };
    const res = await models_1.Link.create(link);
    link.id = res.id;
    const hash = utils_1.generateHash(link.id);
    link.url = `https://${process.env.SHORTEN_DOMAIN}/` + hash;
    await models_1.Link.update({ long_url: link.long_url }, { where: { id: res.id } });
    return link;
}
exports.shortenUrl = shortenUrl;
//# sourceMappingURL=index.js.map