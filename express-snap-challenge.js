const express = require("express")
const morgan = require('morgan')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

const indexRoute = express.Router()

const indexRouteMiddleware = function (request, response, nextFunction) {
    console.log("is this thing on")
    nextFunction()
}

const indexRouteMiddleware2 = (request,response, nextFunction) => {
    return response.json({status: 200, data: null, message: "this thing is on" })
}

indexRoute.route("/apis").get(indexRouteMiddleware, indexRouteMiddleware2)

app.use(indexRoute)

app.listen(4200, () => {console.log("Express has Started")})