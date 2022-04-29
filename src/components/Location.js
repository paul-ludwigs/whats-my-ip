import React from "react";
import PigeonMap from "./PigeonMap";

function Location({ ipDetails }) {
  return (
    <div className="location">
      <h2>Location: {ipDetails.location.city}</h2>
      {ipDetails ? <PigeonMap response={ipDetails}/> : null}
    </div>
  );
}

export default Location;
