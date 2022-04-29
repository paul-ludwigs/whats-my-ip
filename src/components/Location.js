import React from "react";
import PigeonMap from "./PigeonMap";
import { useEffect, useState } from "react";
import axios from "axios";

function Location({ ipDetails }) {
  const [locationDetails, setLocationDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/germany`)
      .then((response) => setLocationDetails(response.data[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Location: {ipDetails.location.city}</h2>
      {locationDetails.length != 0 && locationDetails ? <PigeonMap response={ipDetails}/> : null}
    </>
  );
}

export default Location;
