const express = require('express')
const cityController = require('../Controllers/cityController')
const cityRoutes = express.Router()

cityRoutes.post('/', cityController.createNewCity)
cityRoutes.get('/:id', cityController.getUserCityInfo)
cityRoutes.put('/:id', cityController.addCityStationTroops)
cityRoutes.put('/:id/troops', cityController.setTroopsInCity)
cityRoutes.put('/:id/owner', cityController.updateOwner)


module.exports = cityRoutes