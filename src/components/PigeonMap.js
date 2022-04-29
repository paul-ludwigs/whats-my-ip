import React from "react";
import { Map, Marker } from "pigeon-maps";

function PigeonMap({response}) {
    const location = response.location;
    console.log("Lat: " + location.lat);
  return (
    <Map height={700} defaultCenter={[location.lat,location.lng]} defaultZoom={11}>
      <Marker width={50} anchor={[location.lat, location.lng]} />
    </Map>
  );
}

export default PigeonMap;
