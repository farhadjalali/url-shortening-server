import {start} from "./src/server";

start().catch(reason => {
	console.error(`Starting server failed!`, reason)
	process.exit(0)
})
