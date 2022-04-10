const express = require('express')
const cors = require('cors')

const port = process.env.PORT
const weatherRouter = require('./routers/weatherRouter')

const app = express()

app.use(express.json())
app.use(cors())
app.use(weatherRouter)

app.listen(port, () => {
    console.log('Server connected, port:', port)
})
