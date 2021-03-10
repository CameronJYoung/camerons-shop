const express = require('express');
const pool = require('../../config/db.config');
const router = express.Router();

router.get("/:id", (request, response) => {
	const id = parseInt(request.params.id)

	pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
	if (error) {
		throw error
	}
		response.status(200).json(results.rows)
	})
});

module.exports = router;