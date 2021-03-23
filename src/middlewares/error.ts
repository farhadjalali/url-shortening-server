import {toErrorResponse} from "../utils/error-response";
import express = require('express');
import StatusCode = require("http-status-codes")
import {IExpressRequest} from "../types";

export default function middlewareError(err: unknown, req: IExpressRequest, res: express.Response, next: () => void): void {
	if (!err) return next()
	const er = toErrorResponse(err) // It may be ErrorObject or other error types

	switch (er.code) {
		case StatusCode.NOT_FOUND: {
			res.setHeader('Content-Type', 'text/html; charset=utf8')
			res.status(er.code)
			return
		}
	}

	res.sendStatus(er.code)
}
