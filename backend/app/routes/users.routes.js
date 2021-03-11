module.exports = app => {
	const users = require("../controllers/users.controller.js");

	var router = require("express").Router();

	// Create a new Tutorial
	router.post("/", users.create);
	router.get("/", users.getAll);
	router.delete("/:id", users.delete);
	router.get("/:id", users.getById);

	app.use("/users", router);
};