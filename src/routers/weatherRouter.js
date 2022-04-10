const express = require('express')
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

const router = new express.Router()

router.get('/weather/:city', async (req, res) => {
    const city = req.params.city
    try {
        const {
            longitude,
            latitude
        } = await geocode(city)
        const weatherData = await forecast(latitude, longitude)
        res.send({
            city,
            ...weatherData
        })
    } catch (error) {
        if (error.status === 404) {
            res.status(404).send(error)
        }
    }
})

module.exports = router