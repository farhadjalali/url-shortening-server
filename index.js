"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/server");
server_1.start().catch(reason => {
    console.error(`Starting server failed!`, reason);
    process.exit(0);
});
//# sourceMappingURL=index.js.map