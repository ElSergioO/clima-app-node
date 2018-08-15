const argv = require('yargs')
    .options({
        descripcion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}