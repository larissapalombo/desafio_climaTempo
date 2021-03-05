const model = require('../model/cityModel');

const createCity = async (newCity) => {
  const { city } = newCity;
  const dia = (Math.round((new Date()).getTime() / 1000));
  const createdCity = await model.createCity(city, dia);
  return createdCity;
};

module.exports = {
  createCity,
};
