const pais = {
    alias: '-c',
    desc: 'Pais por codigo'
}

const anio = {
    alias: '-y',
    desc: 'Descripción de la tarea'
}

const path = {
    default: true,
    alias: '-f',
    desc: 'Path del archivo CSV'
}

const argv = require('yargs')
    .command('mostrar', 'Muestra resultado de la busqueda', {
        path
    })
    .command('guardar', 'Guarda el resultado en un archivo', {
        pais,
        anio,
        path
    })
    .argv;

module.exports = {
    argv
}