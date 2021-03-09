const express = require('express');
const bodyParser = require('body-parser');
const getUserById = require('./app/routes/getUserById');
const pool = require('./app/config/db.config');

const port = 9001;

// Initialize app
const app = express()

// Parse requests of content type: application/json

app.get('/', (request, response) => {
    response.send({ info: 'Node.js, Express, and Postgres API' })
})

app.get("/users/:id", (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  });

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})