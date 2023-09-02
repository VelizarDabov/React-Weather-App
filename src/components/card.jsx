import React from "react";
import './card.css'
const Card = ({weather}) => {
    if (!weather) {
        return null; 
      }
    return(
        <div className="weather-card">
            <div className="card-body">
            
        <h2 className="weather-city">Weather in {weather.name}</h2>
        <div>
         <p className="weather-temp">Temperature: {weather.temperature}°C</p>
          <p className="weather-temp">Humidity: {weather.humidity}%</p>
          <p className="weather-temp">Condition: {weather.condition}</p> 
          </div>
        </div>
      </div>
    )
}
export default Card