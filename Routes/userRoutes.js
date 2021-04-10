const express = require('express')
const userController = require('../Controllers/userController')
const userRoutes = express.Router()

userRoutes.post('/', userController.createNewUser)
userRoutes.post('/login', userController.login)
userRoutes.put('/troops', userController.updateTroops)
userRoutes.get('/:id', userController.getUserInfo)
userRoutes.put('/:id/troops', userController.deleteTroops)

module.exports = userRoutes