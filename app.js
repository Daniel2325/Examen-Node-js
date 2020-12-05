const argv = require('./config/yargs').argv;
//const tareas = require('./controlador/tareas');
const { busc, crear } = require('./buscador/buscar');
let comando = argv._[0];

switch (comando) {
    case 'buscar':
        break;
    case 'mostrar':
        busc(argv.pais, argv.anio).catch(e => {
            console.log(e);
        });
        break;
    case 'guardar':
        crear(argv.pais, argv.anio)
            .then(mensaje => {
                console.log(mensaje);
            }).catch(e => {
                console.log(e)
            });

        break;

    default:
        console.log('Comando no reconocido, intente con mostrar o guardar');
}