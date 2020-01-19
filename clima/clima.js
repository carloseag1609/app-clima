const axios = require('axios');

const getClima = async ( lat, lon ) => {

  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=ba65be2f8426b17eb3ccf7e1b53e0cdf&units=metric`);

  return res.data.main.temp;

}

module.exports = {
  getClima
}
