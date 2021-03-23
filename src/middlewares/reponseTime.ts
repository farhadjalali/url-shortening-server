import {logger} from "../utils/logger";
import express = require('express');
import {IExpressRequest} from "../types";

export default function logResponseTime(req: IExpressRequest, res: express.Response, next: () => void): void {
	const startHrTime = process.hrtime();

	res.on('finish', () => {
		const elapsedHrTime = process.hrtime(startHrTime);
		const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
		logger.debug(`${req.path}: ${elapsedTimeInMs}ms`);
	});

	next();
}
