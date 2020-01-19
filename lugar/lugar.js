const axios = require('axios');

const getLugarLatLng = async ( direccion ) => {
  
  const encodedUrl = encodeURI( direccion );
  
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
    headers: {
      'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
      'x-rapidapi-key': 'c92e461b8fmsh4f8e7b053672996p1f4189jsn84c0dd5774de'
    }
  });
  
  const respuesta = await instance.get();

  if( respuesta.data.Results.length === 0 ) {
    throw new Error(`No hay resultados para ${ direccion }`);
  } 

  const data = respuesta.data.Results[0];

  const resp = {
    dir: data.name,
    lat: data.lat,
    lon: data.lon
  }

  return resp;

}

module.exports = {
  getLugarLatLng
}


