import { setUpExpressServer, connectToMongoDB } from "./config/index.js"
import { setUpRoutes } from "./api/routes/index.js"
import { config } from "./config/config.js"

const app = setUpExpressServer()

connectToMongoDB(config.dbURL)

setUpRoutes(app)
