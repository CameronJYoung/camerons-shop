const express = require('express');
const bodyParser = require('body-parser')

// Initialize app
const app = express()

// Parse requests of content type: application/json
app.use(bodyParser.json)