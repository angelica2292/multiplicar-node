//Requirets

//const fs = require('fs');

//const fs = require('express');
//const fs = require('./fs'); escritos por nosotros

const argv = require('./config/yargs').argv;
const colors = require('colors');




const { createFile, listTable } = require('./multiplicar/multiplicar')

let comand = argv._[0];

switch (comand) {

    case 'listar':
        listTable(argv.base, argv.limite);
        break;

    case 'crear':
        createFile(argv.base, argv.limite) //crear el archivo
            .then(file => console.log(`Archivo creado: ${file}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}
//console.log(argv);

//let base = '3';


//console.log(process.argv); //muestra datos con solo process
//let argv2 = process.argv;

//console.log(argv.base);

//console.log('Limite', argv.limite);

//console.log(argv2);
// let argv = process.argv;
// let parametre = argv[2];
// let base = parametre.split('=')[1];

//console.log(base);


// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += (` ${base} * ${i}  = ${base * i }\n`);
// }

// fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {

//     if (err) throw err;

//     console.log('The file has been saved!');
// });

// createFile(base) //crear el archivo
//     .then(file => console.log(`Archivo creado: ${file}`))
//     .catch(e => console.log(e));