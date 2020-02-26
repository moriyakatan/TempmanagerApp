//=====set server====
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const api = require('./server/routes/api')

//=====set mongoose=====
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/WeatherAppDB', { useNewUrlParser: true })


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)


//=====set port=====
app.listen(3000, function() {
    console.log('server _3000 up')
})
