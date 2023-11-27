const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const path = require('path')
const dotenv = require('dotenv')
const app = express()
const db = require('../config/database')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))

dotenv.config()
const port = process.env.PORT

const MahasiswaRouter = require('../routers/RouterMahasiswa')

app.use('/', MahasiswaRouter)

app.listen(port, () => {
    console.log(`Server run in port ${port}`)
})