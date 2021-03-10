const express = require('express');
const pool = require('../../config/db.config');
const router = express.Router();

router.post("/", (request, response) => {
    console.log(request.body);
    const {name,email,password} = request.body

	pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id', [name, email, password], (error, result) => {
	if (error) {
		throw error
	}
		response.status(201).send(`User added with ID: ${result.rows[0].id}`)
	})
});

module.exports = router;