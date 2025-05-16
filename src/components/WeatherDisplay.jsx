import React from 'react';

function WeatherDisplay({ weather, unit }) {
  const temp = unit === 'metric' ? weather.main.temp : (weather.main.temp * 9/5) + 32;  // Convert to Fahrenheit if needed

  return (
    <div className="weather-display">
      <h2>{weather.name}</h2>
      <h3 style={{ color:'#ff69b4' }}>🌤️ Current Weather Conditions</h3>
      <p>🌡️ {temp.toFixed(1)}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬️ Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDisplay;