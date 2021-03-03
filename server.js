require('dotenv').config();

const express = require('express')
var cookieParser = require('cookie-parser')

const app = express()

const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(expressValidator())
app.use(cookieParser())

require('./data/db')


const weapons = require('./controllers/weapon.js')(app)
const weapon_classes = require('./controllers/weapon_class.js')(app);


app.listen(process.env.PORT || 3000, () => {
    console.log('API listening!');
  });

module.exports = app;