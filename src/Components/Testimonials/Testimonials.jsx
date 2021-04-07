import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Eric from "../../Assets/Images/eric.jpg";

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
        <div>
          <img src={Eric} alt="it me" />
          <div className="myCarousel">
            <h3>Couple Ages: 82 + 84</h3>
            <p>What would we do without you!</p>
          </div>
        </div>
        <div>
          <img src={Eric} alt="it me" />
          <div className="myCarousel">
            <h3>Widow Age: 90</h3>
            <p>You're my angel</p>
          </div>
        </div>
        <div>
          <img src={Eric} alt="it me" />
          <div className="myCarousel">
            <h3>Widow Age: 89</h3>
            <p>Thank you for all that you do</p>
          </div>
        </div>
        <div>
          <img src={Eric} alt="it me" />
          <div className="myCarousel">
            <h3>Couple Ages: 85 + 87</h3>
            <p>
              Patricia is our driver, shopper, banker, organizer, cleaner, chef
              and all the little things that can be a challenge for us
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonials;
