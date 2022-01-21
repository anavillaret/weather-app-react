import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [search, setSearch] = useState(false);
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, SetHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e40d4aa4d4b8555f7f377a7a64a2133&units=metric`;
    axios.get(Url).then(getWeather);
  }

  function getWeather(response) {
    setSearch(true);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    SetHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (search) {
    return (
      <div>
        <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeHolder="Type a city here..."
                className="form-control"
                id="city-input"
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="sumbit"
                value="Search"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>
        <h2 className="city text-center">{city}</h2>
        <div className="row">
          <div className="col-9">
            <ul>
              <li className="date">Friday | 19:00</li>
              <li className="description">{description}</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>
                Humidity: <span id="humidity">{humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{wind}</span> Km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="clearfix weather-temperature">
            <img src={icon} alt="" className="float-left" id="icon" />
            {""}
            <strong id="temperature">{temperature}</strong>
            <span className="units">ºC</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="Search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
          <input type="Submit" defaultValue="Search" />
        </form>
        <h4> Loading search results...</h4>
      </div>
    );
  }
}
