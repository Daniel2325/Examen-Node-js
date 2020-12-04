const argv = require('./config/yargs').argv;
//const tareas = require('./controlador/tareas');
const { leer } = require('./controlador/tareas-por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'buscar':
        break;
    case 'mostrar':
        let mostrar = leer;
        console.log(mostrar)

        console.log("===================================".green);
        break;
    case 'guardar':

        break;

    default:
        console.log('Comando no reconocido');
}