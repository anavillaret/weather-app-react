import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2 className="city">{props.data.city}</h2>
      <div className="row">
        <div className="col-9">
          <ul>
            <li className="date">
              <CurrentDate date={props.data.date} />
            </li>
            <li className="description">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span> Km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="clearfix weather-temperature">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-left"
            id="icon"
          />
          {""}
          <strong id="temperature">{Math.round(props.data.temperature)}</strong>
          <span className="units">ºC</span>
        </div>
      </div>
    </div>
  );
}
