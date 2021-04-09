const express = require('express')
const userController = require('../Controllers/userController')
const userRoutes = express.Router()

userRoutes.post('/', userController.createNewUser)
userRoutes.post('/login', userController.login)

module.exports = userRoutes