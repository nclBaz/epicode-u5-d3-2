import express from "express"
import listEndpoints from "express-list-endpoints"
import cors from "cors"
import {
  badRequestErrorHandler,
  forbiddenErrorHandler,
  genericErrorHandler,
  notFoundErrorHandler,
  unauthorizedErrorHandler,
} from "./errorHandlers.js"
import { pgConnect } from "./db.js"

const server = express()
const port = process.env.PORT || 3001

// ********************************* MIDDLEWARES *****************************
server.use(cors())
server.use(express.json())

// ********************************** ENDPOINTS ******************************

// ******************************** ERROR HANDLERS ***************************
server.use(badRequestErrorHandler)
server.use(unauthorizedErrorHandler)
server.use(forbiddenErrorHandler)
server.use(notFoundErrorHandler)
server.use(genericErrorHandler)

await pgConnect()

server.listen(port, () => {
  console.table(listEndpoints(server))
  console.log(`Server is listening on port ${port}`)
})
