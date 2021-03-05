const { query } = require('../config/database');

const createCity = async (city, dia) => {
  await query('INSERT INTO cidades (city, dia) VALUES ($1, $2)', [city, dia]);
  return { message: 'created' };
};

module.exports = {
  createCity,
};
