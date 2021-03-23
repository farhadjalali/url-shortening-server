"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_response_1 = require("../utils/error-response");
const StatusCode = require("http-status-codes");
function middlewareError(err, req, res, next) {
    if (!err)
        return next();
    const er = error_response_1.toErrorResponse(err); // It may be ErrorObject or other error types
    switch (er.code) {
        case StatusCode.NOT_FOUND: {
            res.setHeader('Content-Type', 'text/html; charset=utf8');
            res.status(er.code);
            return;
        }
    }
    res.sendStatus(er.code);
}
exports.default = middlewareError;
//# sourceMappingURL=error.js.map