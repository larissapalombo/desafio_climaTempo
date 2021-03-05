const { Router } = require('express');
const { query } = require('../config/database');

const getCity = Router();

getCity.get('/last', async (_req, res) => {
  try {
    const result = await query(
      'SELECT DISTINCT city, MAX (dia) FROM cidades GROUP BY city ORDER BY MAX (dia) DESC LIMIT 5'
    );
    const lastCity = result.rows;
    res.status(200).send({
      status: 200,
      lastCity,
    });
  } catch (e) {
    res.status(500).send({
      message: e,
    });
  }
});

getCity.get('/top', async (_req, res) => {
  try {
    const result = await query(
      'SELECT COUNT(city), city FROM cidades GROUP BY city HAVING COUNT(city) > 1 ORDER BY COUNT(city) DESC LIMIT 5'
    );
    const topFive = result.rows;
    res.status(200).send({
      status: 200,
      topFive,
    });
  } catch (e) {
    res.status(500).send({
      message: e,
    });
  }
});

module.exports = getCity;
