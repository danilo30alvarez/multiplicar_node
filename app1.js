const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');
const colors = require('colors');

let base =2;


let ListarTabla = (base,limite) =>{
    
         console.log('====================='.green);
         console.log(`==tabla de ${ base}==`.green);
         console.log('====================='.green);
 
         for(let i = 1 ; i <= limite ;i++)
         {
         console.log(`${base} * ${i} = ${ base*i}`);
         }
          
}



let CrearArchivo = (base,limite) =>{

    return new Promise((resolve, reject) =>{

       if (!Number(base)){
          reject(`no es un numero`);
          return;
        }

        let data = '';

        for(let i = 1 ; i <= limite ;i++)
        {
        data += `${base} * ${i} = ${ base*i} \n`;
        }
        fs.writeFile(`archivo/tabla-${base}.txt`, data, (err) => {
            if (err) reject (err)
            else

           resolve(`archivo-${ base}.txt`.green);
          });
    
});

}


module.exports = {
    CrearArchivo,
    ListarTabla
}