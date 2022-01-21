import React from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";

export default function Weather() {
  return (
    <div className="search">
      Ready to search
      <Rings color="#00BFFF" height={80} width={80} />
    </div>
  );
}
