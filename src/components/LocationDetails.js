import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

function LocationDetails() {
    const [locationDetails, setLocationDetails] = useState([]);

    useEffect(() => {
        axios
          .get(`https://restcountries.com/v3.1/name/germany`)
          .then((response) => setLocationDetails(response.data[0]))
          .catch((err) => console.log(err));
      }, []);

  return (
      <div>
      {locationDetails.length != 0 ? (
      <div>
      <h3>Country: {locationDetails.name.common}</h3>
      <img src={locationDetails.flags.png}/>
    </div>
      ): null}
      </div>
  )
}

export default LocationDetails