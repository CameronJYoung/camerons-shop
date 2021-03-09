const express = require('express');
const bodyParser = require('body-parser');
const getUserById = require('./app/routes/getUserById');


// Initialize app
const app = express()

// Parse requests of content type: application/json
app.use(bodyParser.json)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/getUserById', getUserById)

app.listen('2242', () => {
    console.log(`App running on port 2242.`)
})