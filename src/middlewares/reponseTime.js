"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
function logResponseTime(req, res, next) {
    const startHrTime = process.hrtime();
    res.on('finish', () => {
        const elapsedHrTime = process.hrtime(startHrTime);
        const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
        logger_1.logger.debug(`${req.path}: ${elapsedTimeInMs}ms`);
    });
    next();
}
exports.default = logResponseTime;
//# sourceMappingURL=reponseTime.js.map