const express = require('express')
const route = express.Router()
const eventRouter = require('./event')

route
    .use('/event', eventRouter)

    module.exports = route