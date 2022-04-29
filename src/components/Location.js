import React from "react";
import PigeonMap from "./PigeonMap";
import { useEffect, useState } from "react";
import axios from "axios";

function Location({ipDetails}) {
  const [locationDetails, setLocationDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/germany`)
      .then((response) => setLocationDetails(response.data[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="location">
      {locationDetails ? 
      <>
      {console.log(locationDetails)}
      {console.log(ipDetails)}
      <PigeonMap response={ipDetails}/>
      </>
      : null}
    </div>
  );
}

export default Location;
