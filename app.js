const lugar = require('./lugar/lugar'); 
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    descripcion: 'Dirección de la ciudad para obtener el clima (entre comillas si es más de una palabra).',
    demand: true,
  }
}).argv;

const getInfo = async (direccion) => {
  try {
    const res = await lugar.getLugarLatLng(direccion);
    const climaCiudad = await clima.getClima(res.lat, res.lon);
    console.log(`El clima en ${ res.dir } es de ${ climaCiudad }°C`);
  } catch (error) {
    console.log(error);
  }
}

getInfo(argv.direccion);
