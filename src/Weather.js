import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city here..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>
        <h2 className="city">{weatherData.city}</h2>
        <div className="row">
          <div className="col-9">
            <ul>
              <li className="date">
                <CurrentDate date={weatherData.date} />
              </li>
              <li className="description">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span> Km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
              id="icon"
            />
            {""}
            <strong id="temperature">
              {Math.round(weatherData.temperature)}
            </strong>
            <span className="units">ºC</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2e40d4aa4d4b8555f7f377a7a64a2133";
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(Url).then(handleSubmit);
    return "Loading...";
  }
}
