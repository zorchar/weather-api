const fileReader = require("fs");
const axios = require("axios");

const geocode = async (city) => {
    const token = process.env.MAPBOX_TOKEN
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${token}&limit=1`

    try {
        const result = await axios.get(url)
        if (result.data.features.length > 0) {
            return {
                longitude: result.data.features[0].center[0],
                latitude: result.data.features[0].center[1],
                city_name: result.data.features[0].place_name,
            }
        }
        else {
            throw {
                status: 404,
                message: 'Place not Found'
            }
        }

    } catch (error) {
        throw error
    }
}

// geocode('jerusalem')
//     .then((res) => {
//         console.log(res);
//     }).catch((error) => {
//         console.log(error);
//     })

module.exports = geocode