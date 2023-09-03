import React from "react";
import './card.css'
import WeatherIcons from "./weatherIcons";
const Card = ({weather}) => {
    if (!weather) {
        return null; 
      }
    return(
        <div className="weather-card">
            <div className="card-body">
           
        <h2 className="weather-city">{weather.name}</h2>
        <div className="weather-temp">
        <WeatherIcons condition={weather.condition}  size="2x"/>
         <p >Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Condition: {weather.condition}</p> 
          </div>
        </div>
      </div>
    )
}
export default Card