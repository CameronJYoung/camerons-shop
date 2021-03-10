const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./app/routes/userRoutes');

const port = 9001;

// Initialize app
const app = express()

// Parse requests of content type: application/json

app.get('/', (request, response) => {
    response.send({ info: 'Node.js, Express, and Postgres API' })
})

app.use("/users", userRoutes.getUserById);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})