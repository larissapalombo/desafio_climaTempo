const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const controller = require('./controller/cityController');
const getController = require('./controller/getController');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/', controller);
app.use('/', getController);

const PORT = 5000;
app.listen(PORT, () => console.log(`Listen on ${PORT} port`));
