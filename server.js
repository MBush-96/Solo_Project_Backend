const express = require('express')
const app = express()
const rowdy = require ('rowdy-logger')
const userRoutes = require('./routes/userRoutes')
const cityRoutes = require('./routes/cityRoutes')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())


const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})

app.use('/user', userRoutes)
app.use('/city', cityRoutes)