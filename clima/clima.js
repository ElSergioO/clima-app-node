const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6ab96a6aeb7875570fdd0a0d9a65f3c9`);
    if (!isNaN(resp.data.main.temp)) {
        let temperatura = resp.data.main.temp;
        return temperatura;
    } else {
        throw new Error(`No hay resultados para la ciudad`);
    }
}

module.exports = {
    getClima
}