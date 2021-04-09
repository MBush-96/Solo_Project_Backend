const { default: axios } = require('axios')
const models = require('../models')
const userController = {}

userController.createNewUser = async (req, res) => {
    try {
        const user = await models.user.findOrCreate({
            where: {
                username: req.body.username,
                password: req.body.password,
                infantryInReserve: 0
            }
        })
        res.json({user})
    } catch (error) {
        res.json({error: error.message})
    }
}

userController.login = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                username: req.body.username
            }
        })
        if(user.password === req.body.password) {
            res.json({user})
        } else {
            res.json({message: "Invalid login"})
        }
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = userController