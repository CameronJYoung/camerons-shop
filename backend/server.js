require('dotenv').config()
const express = require('express');
const Routes = require('./app/routes/users.routes');

const port = process.env.API_PORT;

// Initialize app

const app = express()
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Initialize database

const db = require("./app/models")
db.sequelize.sync();

// Routes

// Entry Route
app.get('/', (request, response) => {
    response.send({ info: 'Node.js, Express, and Postgres API' })
})
// User Routes
require("./app/routes/users.routes")(app);


// Listen for requests

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})