require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const {PORT} = process.env
const app = express()
const port = PORT || 5001
const {findBreweries} = require('./src/backend/beerApiFunctions')

//initializePassport(passport)
app.use(bodyParser.json());

//Api
app.post('/api/find_breweries', findBreweries);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}
app.listen(port, () => { console.log(`Server listening on port ${port}..`) });