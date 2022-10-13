if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

// View engine
app.set('view engine', 'ejs')

// Views
app.set('views', __dirname + '/views')

// Express layouts
app.set('layout', 'layouts/layout')

// Use express layouts
app.use(expressLayouts)

// Public files (css/js/src) -- usually public
app.use(express.static('public'))

// DB
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', ()=> console.log('Connected to Mongoose'))

app.use('/', indexRouter)

// Start the server
app.listen(process.env.PORT || 3000) // Automatically gets the port from the env. Not manually typed in port.