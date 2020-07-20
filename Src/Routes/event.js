const express = require('express')
const route = express.Router()

const {getAll, inputEvent, deleteEvent} = require('../Controllers/event')

route
    .get('/', getAll)
    .post('/', inputEvent)
    .delete('/:eventId', deleteEvent)
    

module.exports = route