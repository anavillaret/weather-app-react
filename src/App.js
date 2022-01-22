import "./App.css";
import Weather from "./Weather";
import Logo from "./logo.png";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <h1 classNamea="app-title" alt="logo" width="10rem">
        <img src={Logo} alt="logo" width="160px" />
        <span className="title">WEATHER </span>
      </h1>
      <Weather />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
