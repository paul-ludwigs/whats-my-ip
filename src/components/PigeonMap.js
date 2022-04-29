import React from "react";
import { Map, Marker } from "pigeon-maps";

function PigeonMap() {
  return (
    <Map height={700} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
  );
}

export default PigeonMap;
