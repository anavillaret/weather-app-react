import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weather-forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={25} />
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-max">{maxTemperature()}</span>
        <span className="weather-forecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
