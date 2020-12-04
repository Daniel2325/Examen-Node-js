const pais = {
    alias: 'c',
    default: 'ECU', //Pais por deecto Euador
    desc: 'Pais por codigo'
}

const anio = {
    alias: 'y',
    default: 1960, //Anio por defecto 1960
    desc: 'Descripción de la tarea'
}

const archivo = {
    alias: 'f',
    desc: 'Path del archivo CSV'
}

const argv = require('yargs')
    .command('mostrar', 'Muestra resultado de la busqueda', {
        pais,
        anio,
        archivo
    })
    .command('guardar', 'Guarda el resultado en un archivo', {
        pais,
        anio,
        archivo
    })
    .argv;

module.exports = {
    argv
}