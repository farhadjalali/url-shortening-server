import Url from "url";
import express = require('express');

export const Constants = {
	INFO_LOG_FILE: 'info.log',
	ERROR_LOG_FILE: 'error.log',
}

export interface Context {
	user: {
		email: string
		title: string
	},
	url: Url.URL
}

export interface IExpressRequest extends express.Request {
	context: Context
}
