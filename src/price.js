const axios = require('axios');
const exchange_id = 'kraken';
let config = {
method: 'get',
maxBodyLength: Infinity,
url: `https://api.coingecko.com/api/v3/exchanges/${exchange_id}`,
headers:{
  'Access-Control-Allow-Origin' : '*',
  }
}

const fetchData = async() => {
const response = await axios.request(config);
return response.data;
}

module.exports = fetchData;