import logo from "./logo.svg";
import "./App.css";
import PigeonMap from "./components/PigeonMap";
import Location from "./components/Location";
import LocationDetails from "./components/LocationDetails";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios
      .get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_o7JWg2NAdS7awhmGEhiyYnVEPmjMy`)
      .then((response) => setResponse(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {response.length != 0 ? (
          <>
          {console.log(response)}
            <h1>My IP: {response.ip}</h1>
            <Location ipDetails={response} />
            <LocationDetails />
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </header>
    </div>
  );
}

export default App;
