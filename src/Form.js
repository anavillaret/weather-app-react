import React from "react";

export default function Form() {
  return (
    <form id="search-form" className="mb-3">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeHolder="Type a city here..."
            className="form-control"
            id="city-input"
            autoComplete="off"
          />
        </div>
        <div className="col-3">
          <button
            type="sumbit"
            value="Search"
            className="btn btn-light w-100"
          />
        </div>
      </div>
    </form>
  );
}
