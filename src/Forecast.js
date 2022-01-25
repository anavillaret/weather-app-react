import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import { useState } from "react/cjs/react.development";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="row">
          <div className="col">
            <div className="weather-forecast-day">Mon</div>
            <WeatherIcon code="01d" size={25} />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-max">15º</span>
              <span className="weather-forecast-min">6º</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2e40d4aa4d4b8555f7f377a7a64a2133";
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
