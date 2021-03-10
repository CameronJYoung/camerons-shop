const express = require('express');
const pool = require('../../config/db.config');
const router = express.Router();

router.delete("/:id", (request, response) => {
    const id = parseInt(request.params.id)

	pool.query('DELETE FROM users WHERE id = $1', [id], (error, result) => {
	if (error) {
		throw error
	}
        response.status(200).send(`User deleted with ID: ${id}`)
	})
});

module.exports = router;