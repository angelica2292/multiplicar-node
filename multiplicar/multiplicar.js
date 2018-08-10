const fs = require('fs');
const colors = require('colors');

let listTable = (base, limite = 10) => {

    console.log('==============='.green);
    console.log(`Tabla de  ${base}`.green);
    console.log('==============='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} * ${i}  = ${base * i }`);
    }
}

let createFile = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido no es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (` ${base} * ${i}  = ${base * i }\n`);
        }

        fs.writeFile(`tablas/table-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`table-${base}-al-${limite}.txt`);
        });
    });
}


module.exports = {
    createFile,
    listTable

}