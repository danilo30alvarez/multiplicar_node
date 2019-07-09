const argv = require('./config/yargs').argv;
const colors = require('colors');
const { CrearArchivo, ListarTabla  } = require('./app1');


let comando = argv._[0];

switch(comando)
{
    case 'listar':
        ListarTabla(argv.base, argv.limite).
        then(archivo => console.log(`${archivo}`))
        .catch(e=> console.log(e));
        break;
    case 'crear':
            CrearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}














//let argv2 = process.argv;  //activamos captura en consola
//let parametro = argv[2]; //capturamos el parametro

//let base = parametro.split('=')[1] // decimos desde donde guardamos en string
//console.log('limite', argv.limite);  // mostramo el valor capturado en pantalla.
//console.log(argv2);

//CrearArchivo(base)
//.then(archivo => console.log(`Archivo Creado: ${archivo}`))
//.catch(e => console.log(e));
