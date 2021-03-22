"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const logger_1 = require("./utils/logger");
const resolvers_1 = __importDefault(require("./resolvers"));
const schema_1 = __importDefault(require("./schema"));
const app_1 = require("./app");
async function start() {
    console.log(`Starting web service ...`);
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.default,
        resolvers: resolvers_1.default,
        playground: true,
        context: ({ req }) => req.context,
    });
    server.applyMiddleware({ app: app_1.app });
    app_1.app.listen(process.env.PORT, async () => {
        logger_1.logger.info(`Server started on http://127.0.0.1:${process.env.PORT}`);
    });
}
exports.start = start;
//# sourceMappingURL=server.js.map