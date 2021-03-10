const getUserById = require('./users/getUserById')
const getUsers = require('./users/getUsers')
const createUser = require('./users/createUser')
const deleteUser = require('./users/deleteUser')
const updateUser = require('./users/updateUser')

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
}