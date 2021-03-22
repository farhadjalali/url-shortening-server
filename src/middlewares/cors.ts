import express = require('express');

export default function middlewareCors(req: express.Request, res: express.Response, next: () => void): void {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	if (req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
}
