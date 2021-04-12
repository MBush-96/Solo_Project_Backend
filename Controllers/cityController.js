const { default: axios } = require('axios')
const models = require('../models')
const cityController = {}

cityController.createNewCity = async (req, res) => {
    try {
        const city = await models.city.findOrCreate({
            where: {
                name: req.body.name,
                infantryInCity: req.body.infantryInCity,
                userId: parseInt(req.body.userId),
                previousOwnerUserId: 0
            }
        })
        res.json({city})
    } catch (error) {
        res.json({error: error.message})
    }
}

cityController.getUserCityInfo = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.params.id
            }
        })
        const city = await user.getCities()
        res.json({city})
    } catch (error) {
        res.json({error: error.message})
    }
}

cityController.addCityStationTroops = async (req, res) => {
    try {
        const city = await models.city.findOne({
            where: {
                id: req.params.id
            }
        })
        const user = city.getUser()
        const updatedTroopCount = city.infantryInCity + parseInt(req.body.infantryInCity)
        await city.update({
            infantryInCity: updatedTroopCount
        })
        await user.update({
            infantryInReserve: infantryInReserve - parseInt(req.body.infantryInCity)
        })
        res.json({city})
    } catch (error) {
        res.json({error: error.message})
    }
}

cityController.setTroopsInCity = async (req, res) => {
    try {
        const city = await models.city.findOne({
            where: {
                id: req.params.id
            }
        })
        await city.update({
            infantryInCity: req.body.infantryInCity
        })
        res.json({city})
    } catch (error) {
        res.json({error: error.message})
    }
}

cityController.updateOwner = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.body.newOwner
            }
        })
        const city = await models.city.findOne({
            where: {
                id: req.params.id
            }
        })
        city.setUser(user)
        res.json({city})
    } catch (error) {
        res.json({error: error.message})
    }
}


module.exports = cityController
