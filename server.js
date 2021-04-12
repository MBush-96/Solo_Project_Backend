const express = require('express')
const app = express()
const rowdy = require ('rowdy-logger')
const userRoutes = require('./Routes/userRoutes')
const cityRoutes = require('./Routes/cityRoutes')
const routesReport = rowdy.begin(app)
const PATH = require('path')

app.use(express.json())
app.use(require('cors')())


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})

app.get('/', (req, res) => {res.send('hi')})
app.use('/user', userRoutes)
app.use('/city', cityRoutes)