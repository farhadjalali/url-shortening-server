"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toErrorResponse = exports.ErrorResponse = void 0;
const StatusCode = require("http-status-codes");
class ErrorResponse extends Error {
    constructor(code, message, data) {
        super(message);
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
exports.ErrorResponse = ErrorResponse;
function toErrorResponse(err) {
    if (err) {
        if (err instanceof ErrorResponse) {
            return err;
        }
        else if (typeof err === 'number') {
            return new ErrorResponse(err, StatusCode.getStatusText(err));
        }
        else if (typeof err === 'string') {
            return new ErrorResponse(StatusCode.INTERNAL_SERVER_ERROR, err);
        }
    }
    return null;
}
exports.toErrorResponse = toErrorResponse;
//# sourceMappingURL=error-response.js.map