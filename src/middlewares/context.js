"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(require("url"));
function middlewareContext(req, res, next) {
    req.context = {
        long_url: new url_1.default.URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`),
        user: null
    };
    next();
}
exports.default = middlewareContext;
//# sourceMappingURL=context.js.map