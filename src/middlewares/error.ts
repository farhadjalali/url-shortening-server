import {toErrorResponse} from "../utils/error-response";
import StatusCode = require("http-status-codes")

export default async function middlewareError(err, req, res, next) {
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
