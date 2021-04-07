import React from "react";
import "./Location.scss";

function Location() {
  return (
    <div className="location" id="location">
      <h2 className="location__title">Location</h2>
      <div className="location__map-container">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1UUZ6Qclhz6Kc-smyBaJmqr186kcdWO91"
          title="service area"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
