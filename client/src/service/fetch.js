import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const createCity = (city) => {
  const newCity = axios
    .post(`${API_URL}`, {
      city,
    })
    .then((response) => response.data)
    .catch((err) => err);
  return newCity;
};

/*
Busca a lista de cidades mais buscadas
*/

export async function getTopCity() {
  try {
    const response = await axios.get(`${API_URL}/top`);
    return response.data.topFive;
  } catch (e) {
    console.log('erro, e');
  }
}

/*
Busca a lista de ultimas cidades procuradas
*/

export async function getLastCity() {
  try {
    const response = await axios.get(`${API_URL}/last`);
    return response.data.lastCity;
  } catch (e) {
    console.log('erro', e);
  }
}
