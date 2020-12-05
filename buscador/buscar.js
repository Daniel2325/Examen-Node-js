const fs = require('fs');
const csv = require('csv-parser');
const colors = require('colors');

//Guardamos datos del csv
const datos = [];

let busc = (pais = 'ECU', anio = 1960, path = './datos.csv') => {

    return new Promise((resolve, reject) => {
        console.log("-----Estos son los datos-----".red)
            //Leemos el csv y guardamos datos en la variable datos

        fs.createReadStream(path)
            .pipe(csv({}))
            //Añadimos a la variable datos a travez del push
            .on('data', (data) => {
                datos.push(data); //push a datos
            })
            .on('end', () => {
                //Bucle para comparar datos ingresados con originales
                // contador para recorrer hasta que se encuentre datos
                for (let i = 0; i < datos.length; i++) {
                    if (datos[i]['Country Code'] === pais) {
                        data = datos[i];
                        console.log(`Datos: ${data["Indicator Name"]}`.red);
                        console.log(`Pais: ${data["Country Code"]}`);
                        console.log(`Año: ${anio}`);
                        console.log(`Valor: ${data[anio]}`.yellow);
                    }
                }
            });

    });
}
let datosFin = "";
let crear = (pais = 'ECU', anio = 1960, path = './datos.csv') => {
    return new Promise((resolve, reject) => {

        fs.createReadStream(path)
            .pipe(csv({}))
            .on('data', (data) => datos.push(data))
            .on('end', () => {
                // Mismo for anerior para leer
                //  para guardar datos consultados en txt
                for (let i = 0; i < datos.length; i++) {
                    // Variables extraidas que coinciden con lo consultado 
                    if (datos[i]['Country Code'] === pais) {
                        data = datos[i];
                        datosFin += `Pais: ${data["Country Code"]} \n`;
                        datosFin += `Año: ${anio} \n`;
                        datosFin += `Valor: ${data[anio]} \n`;
                        fs.writeFile(`./resultados/${pais}-${anio}.txt`, datosFin, (err) => {
                            if (err)
                                reject(err);
                            resolve(`Si se guardo :)/${anio}-${pais}.txt`);
                        });
                    }
                }
            });
    });
}



module.exports = {
    busc,
    crear
}