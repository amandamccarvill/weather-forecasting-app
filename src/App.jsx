import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast'; 
import TemperatureToggle from './components/TemperatureToggle';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState('metric');

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
      );
      setWeather(res.data);
    } catch (err) {
      setError('City not found or API error.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="App">
      <h1>🌸 Weather App</h1>
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />

      {/* Show refresh button and temperature toggle only after weather is fetched */}
      {weather && (
        <>
          <button onClick={() => window.location.reload()} className="refresh-button">
            🔄 Refresh Page
          </button>
          <TemperatureToggle unit={unit} toggleUnit={toggleUnit} />
        </>
      )}

      {/* Loading or Error States */}
      {loading && <p>⏳ Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Weather Display */}
      {weather && <WeatherDisplay weather={weather} unit={unit} />}

      {/* Forecast Component */}
      {weather && <Forecast city={city} unit={unit} />}
    </div>
  );
}

export default App;
