import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./Testimonials.scss";

function Testimonials() {
  return (
    <div className="testimonials">
      <h2 className="testimonials__title">Testimonials</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={4000}
      >
        <div className="test">
          <h4>What would we do without you!</h4>
          <p>Couple Ages: 82 + 84</p>
        </div>

        <div className="test">
          <h4>You're my angel</h4>
          <p>Widow Age: 90</p>
        </div>

        <div className="test">
          <h4>Thank you for all that you do</h4>
          <p>Widow Age: 89</p>
        </div>
        <div className="test">
          <h4>
            Patricia is our driver, shopper, banker, organizer, cleaner, chef
            and all the little things that can be a challenge for us
          </h4>
          <p>Couple Ages: 85 + 87</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonials;
