import express = require('express')
import bodyParser = require('body-parser')
import middlewareCors from './middlewares/cors'
import middlewareResponseTime from './middlewares/reponseTime'
import middlewareContext from './middlewares/context'
import middlewareError from './middlewares/error'

export const app = express()

app
	.use(express.json())
	.use(express.urlencoded({extended: true}))
	.use(middlewareResponseTime)
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use(middlewareContext)
	.use(middlewareCors)
	.use(middlewareError)
