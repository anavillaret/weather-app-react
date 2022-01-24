import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              Humidity:<span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind:<span id="wind">{props.data.wind}</span> Km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="clearfix weather-temperature">
          <div id="icon">
            <WeatherIcon code={props.data.icon} size={45} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
