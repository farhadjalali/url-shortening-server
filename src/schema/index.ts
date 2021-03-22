import * as fs from "fs"
import * as path from "path"

let typeDefs = ""

fs.readdirSync(__dirname).forEach(file => {
	if (path.extname(file) == ".graphql") {
		typeDefs += fs.readFileSync(path.join(__dirname, file), "utf8")
	}
});

export default typeDefs
