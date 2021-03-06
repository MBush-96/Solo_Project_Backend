const { default: axios } = require('axios')
const { urlencoded } = require('express')
const models = require('../models')
const userController = {}

userController.createNewUser = async (req, res) => {
    try {
        const user = await models.user.findOrCreate({
            where: {
                username: req.body.username,
                password: req.body.password,
                infantryInReserve: 0,
                profileImgSrc: 'https://i.imgur.com/CWExPZG.png'
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

userController.updateTroops = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.body.id
            }
        })
        const newTroops = parseInt(user.infantryInReserve) + parseInt(req.body.infantryInReserve)
        await user.update({
            infantryInReserve: newTroops
        })
        res.json({user})
    } catch (error) {
        res.json({error: error.message})
    }
}

userController.deleteTroops = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.params.id
            }
        })
        const troops = parseInt(user.infantryInReserve) - parseInt(req.body.infantryInReserve)
        console.log(typeof troops);
        console.log(troops);
        await user.update({
            infantryInReserve: parseInt(troops)
        })
        res.json({user})
    } catch (error) {
        res.json({error: error.message})
    }
}

userController.getUserInfo = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({user})
    } catch (error) {
        res.json({error: error.message})
    }
}

userController.getAllUsers = async (req, res) => {
    try {
        const users = await models.user.findAll()
        res.json({users})
    } catch (error) {
        res.json({error: error.message})
    }
}



module.exports = userController