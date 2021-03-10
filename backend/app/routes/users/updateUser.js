const express = require('express');
const pool = require('../../config/db.config');
const router = express.Router();

router.put("/:id", (request, response) => {
    const id = parseInt(request.params.id)
    const {name, email, password} = request.body;
	pool.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4',
    [name, email, password, id],
    (error, results) => {
	if (error) {
		throw error
	}
		response.status(200).send(`User modified with ID: ${id}`)
	})
});

module.exports = router;