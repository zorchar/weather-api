const axios = require('axios')

const forecast = async (lat, lon) => {
    const token = process.env.OPENWEATHER_TOKEN
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}&units=metric`

    try {
        const result = await axios.get(url)
        // return result.data
        if (result.response = 200) {
            return {
                lon: result.data.coord.lon,
                lat: result.data.coord.lat,
                weather: result.data.weather[0].description,
                temperature: result.data.main.temp,
                humidity: result.data.main.humidity,
                wind: result.data.wind,
            }
        }
    } catch (error) {
        throw {
            status: error.response.data.cod,
            message: error.response.data.message
        }
    }
}

forecast(32.088545, 3004.78254)
    .then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    })