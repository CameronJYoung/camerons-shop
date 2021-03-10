const express = require('express');
const pool = require('../../config/db.config');
const router = express.Router();

router.get("/", (request, response) => {
	pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
	if (error) {
		throw error
	}
		response.status(200).json(results.rows)
	})
});

module.exports = router;