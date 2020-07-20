const express = require('express')
const route = express.Router()

const {getAll, inputEvent, deleteEvent} = require('../Controllers/event')
const { uploadImage } = require('../Controllers/upload')


route
    .get('/', getAll)
    .post('/',uploadImage, inputEvent)
    .delete('/:eventId', deleteEvent)
    

module.exports = route