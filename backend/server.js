const express = require('express');
const Routes = require('./app/routes/Routes');

const port = 9001;

// Initialize app

const app = express()
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Routes

// Entry Route
app.get('/', (request, response) => {
    response.send({ info: 'Node.js, Express, and Postgres API' })
})

const db = require("./app/models")
db.sequelize.sync();

// User Routes
require("./app/routes/Routes")(app);
// app.use("/users", Routes.getUserById);
// app.use("/users", Routes.getUsers);
// app.use("/users", Routes.createUser);
// app.use("/users", Routes.deleteUser);
// app.use("/users", Routes.updateUser);


// Listen for http requests

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})