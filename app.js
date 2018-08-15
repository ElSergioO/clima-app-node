const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}°`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}

getInfo(argv.descripcion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

/* lugar.getLugarLatLng(argv.descripcion)
    .then(resp => {
        clima.getClima(resp.lat, resp.lng)
            .then(resp2 => console.log(`La temperatura en ${resp.direccion} es: ${resp2}°`))
            .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

clima.getClima(30, 20)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));*/