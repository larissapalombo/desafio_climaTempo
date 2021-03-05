import React, { useState } from 'react';
import axios from 'axios';
import { createCity, getLastCity, getTopCity } from './service/fetch';
import './App.css';

const App = () => {
  const [temperature, setTemperature] = useState('');
  const [desc, setDesc] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [humidity, setHumidity] = useState('');
  const [lastCities, setLastCities] = useState([]);
  const [topCities, setTopCities] = useState([]);

  const getWeatherData = (city) => {
    axios({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=218bad18671a15bd654e6c5af763aeda`,
    })
      .then((response) => {
        console.log(response.data.main.temp);

        // Kelvin to Celsius
        setTemperature(response.data.main.temp - 273.15);

        setDesc(response.data.weather[0].main);

        setCountry(response.data.sys.country);

        setHumidity(response.data.main.humidity);

        createCity(city);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getLast = () => {
    getLastCity().then((data) => {
      console.log(data);
      setLastCities(data);
    });
  };

  const getTop = () => {
    getTopCity().then((data) => {
      console.log(data);
      setTopCities(data);
    });
  };

  return (
    <>
      <div className="title">Clima Tempo</div>
      <br />
      <div className="dados">
        <span>Cidade: {city}</span>
        <br></br>
        <span>Temperatura: {Math.round(temperature * 100) / 100} ºC</span>
        <br></br>
        <span>País: {country}</span>
        <br></br>
        <span>Clima: {desc}</span>
        <br></br>
        <span>Umidade: {humidity} %</span>
      </div>
      <br></br>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button
        onClick={() => {
          getWeatherData(city);
          getLast();
          getTop();
        }}
      >
        Buscar
      </button>
      <div>
        <h3>Últimas cidades pesquisadas</h3>
        {lastCities.map((city) => (
          <div key={city.city}>{city.city}</div>
        ))}
      </div>
      <div>
        <h3>Top 5 cidades mais pesquisadas</h3>
        {topCities.map((city) => (
          <div key={city.city}>{city.city}</div>
        ))}
      </div>
    </>
  );
};

export default App;
