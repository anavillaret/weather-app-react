import React from "react";

import { Rings } from "react-loader-spinner";

export default function Weather() {
  return (
    <div className="weather-info">
      <h2 id="city">Lisbon</h2>
      <div className="row">
        <div className="col-9">
          <ul>
            <li className="date">Friday | 19:00</li>
            <li className="description">Clear Sky</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>
              Humidity: <span id="humidity">69</span>%
            </li>
            <li>
              Wind: <span id="wind">5</span> Km/h
            </li>
          </ul>
        </div>
      </div>
      <Rings color="#00BFFF" height={80} width={80} />
    </div>
  );
}
