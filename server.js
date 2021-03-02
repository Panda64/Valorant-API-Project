require('dotenv').config();

const express = require('express')
var cookieParser = require('cookie-parser')

var jwt = require('express-jwt')
var jwks = require('jwks-rsa')

const app = express()

const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(expressValidator())
app.use(cookieParser())

require('./data/db')

// var jwtCheck = jwt({
//       secret: jwks.expressJwtSecret({
//           cache: true,
//           rateLimit: true,
//           jwksRequestsPerMinute: 5,
//           jwksUri: 'https://panda64.us.auth0.com/.well-known/jwks.json'
//       }),
//       audience: 'https://valorant-api',
//       issuer: 'https://panda64.us.auth0.com/',
//       algorithms: ['RS256']
//   });

//   app.use(jwtCheck)


// TODO: Add each controller here, after all middleware is initialized.
const weapons_class = require('./controllers/weapons.js')(app);


app.listen(3000, () => {
    console.log('API listening on port http://localhost:3000!');
  });

module.exports = app;