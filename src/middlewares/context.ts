import Url from "url";
import express = require('express');
import {IExpressRequest} from "../types";

export default function middlewareContext(req: IExpressRequest, res: express.Response, next: () => void): void {
	req.context = {
		long_url: new Url.URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`),
		user: null
	}

	next()
}
