const opciones = {
    base: {
        demand: true,  //valor obligatorio 
        alias: 'b'
    },
    limite: { 
        alias: 'l',
        default: 10 // valor por defecto
 }
}


const argv = require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar', opciones)
.command('crear','genera un archivo de la tabla multiplicar', opciones)
.help()
.argv;

module.exports = {
   argv
}
