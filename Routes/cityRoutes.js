const express = require('express')
const cityController = require('../Controllers/cityController')
const cityRoutes = express.Router()

cityRoutes.post('/', cityController.createNewCity)
cityRoutes.get('/:id', cityController.getUserCityInfo)
cityRoutes.put('/:id', cityController.addCityStationTroops)


module.exports = cityRoutes