const { argv } = require('./config/yargs');
//const tareas = require('./controlador/tareas');
const { busc, crear } = require('./controlador/tareas-por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'buscar':
        break;
    case 'mostrar':
        busc(argv.pais, argv.anio, argv.archivo).catch(e => {
            console.log(e);
        });
        break;
    case 'guardar':
        crear(argv.pais, argv.anio, argv.archivo)
            .then(mensaje => {
                console.log(mensaje);
            }).catch(e => {
                console.log(e)
            });

        break;

    default:
        console.log('Comando no reconocido');
}