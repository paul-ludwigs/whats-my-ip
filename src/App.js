import logo from './logo.svg';
import './App.css';
import PigeonMap from './components/PigeonMap';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [ip, setIP] = useState("");


  useEffect(()=>{
    /*axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`)
      .then((response) => setIP(response.data.ip))
      .catch((err) => console.log(err))*/
    
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {ip ? <h1>What is my IP: {ip}</h1> : <h2>Loading...</h2>}
      <PigeonMap />
      </header>
    </div>
  );
}

export default App;
