const axios = require('axios');
const argv = require('../config/yargs').argv;

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(argv.descripcion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);
    if (resp.data.status === 'OK') {
        let location = resp.data.results[0];
        return {
            direccion: location.formatted_address,
            lat: location.geometry.location.lat,
            lng: location.geometry.location.lng,
        }
    } else {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
}

module.exports = {
    getLugarLatLng
}