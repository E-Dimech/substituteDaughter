import React from "react";
import HFX from "../../Assets/Images/HFX_Service_Area.jpg";
import "./Location.scss";

function Location() {
  return (
    <div className="location" id="location">
      <h2 className="location__title">Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d90780.54051570232!2d-63.77902525917375!3d44.68098690954857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1614744836199!5m2!1sen!2sca"
        width="600"
        height="450"
        // style="border:0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      {/* <img className="location__map" src={HFX} alt="Service area within HFX" /> */}
    </div>
  );
}

export default Location;
