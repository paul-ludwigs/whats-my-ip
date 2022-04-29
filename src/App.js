import logo from "./logo.svg";
import "./App.css";
import PigeonMap from "./components/PigeonMap";
import Location from "./components/Location";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios
      .get(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`)
      .then((response) => setResponse(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {
          response ? (
            <PigeonMap response={response} />
          ) : null /*response ? <h1>What is my IP: {response.data.ip}</h1> : <h2>Loading...</h2>*/
        }
      </header>
    </div>
  );
}

export default App;
