import Weather from "./Weather";
import Logo from "./logo.png";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-title" alt="logo" width="10rem">
        <img src={Logo} alt="logo" width="160px" />
        <span className="title">WEATHER</span>
      </h1>
      <Weather />
      <hr></hr>
      <Footer />
    </div>
  );
}
