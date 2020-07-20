const {port} = require('./Src/Config')
const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mainNavigation = require('./Src/Routes')
const cors = require('cors')

app.use(cors('*'))
app.listen(port, () => console.log(`\n This server is running ${port}`))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use('/', mainNavigation)
