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
            <>
              <h1>My IP: {response.ip}</h1> 
              <Location ipDetails={response} />
            </>
          ) : <h1>Loading...</h1>
        }
      </header>
    </div>
  );
}

export default App;
