const fs = require('fs');
const csv = require('csv-parser');


const datos = [];

const leer = () => {
    fs.createReadStream('./datos(1).csv')
        .pipe(csv())
        .on('data', (dataRow) => {
            datos.push(JSON - stringify(dataRow))
        })
        .on('end', () => {
            console.log('CSV file succesufully')
        })
}
console.log(leer())
    /*let tareasPorHacer = [];

    const cargarDB = () => {
        try {
            tareasPorHacer = require('../modelo/data.json');
        } catch (error) {
            tareasPorHacer = [];
        }
    }

    const guardarDB = () => {
        let data = JSON.stringify(tareasPorHacer);
        fs.writeFile('modelo/data.json', data, (err) => {
            if (err) throw new Error('No se pudo guardar la data', err);
        });
    }

    const crear = (descripcion) => {
        cargarDB();
        let tarea = {
            descripcion,
            completado: false
        }
        tareasPorHacer.push(tarea);
        guardarDB();
        return tarea;
    }

    const getLista = () => {
        cargarDB();
        return tareasPorHacer;
    }



    */
module.exports = {
    leer


}