import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="weather-forecast">
      <div className="col-2">
        <div class="weather-forecast-day">Mon</div>
        <WeatherIcon code="01d" size={25} />
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-max">15º</span>
          <span className="weather-forecast-min">6º</span>
        </div>
      </div>
    </div>
  );
}
