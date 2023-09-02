import React, {useState} from 'react';
import './App.css';
import Card from './components/card';
function App() {

  const url = 'https://weather-app-d0cb9-default-rtdb.firebaseio.com/cities.json';

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(url);
      const weatherData = await response.json();

      if (weatherData && weatherData[cityName]) {
        return weatherData[cityName];

      } else {
        throw new Error('City not found!');
      }
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
    } catch (error) {
      console.log('City not found:', error.message);
    }
  };

  return (
    <div className="App">
      <h1 className="header">Weather App</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <Card weather={weather} />
    </div>
  );
}

export default App;