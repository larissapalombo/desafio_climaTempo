const { Router } = require('express');
const { query } = require('../config/database');

const service = require('../service/cityService');

const cidades = Router();

cidades.post('/', async (req, res) => {
  const { city, dia } = req.body;
  const cidade = await service.createCity(req.body);
  return res.status(201).json({ city, dia });
});

module.exports = cidades;
