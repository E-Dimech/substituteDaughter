import React from "react";
import Eric from "../../Assets/Images/eric.jpg";
import "./Contact.scss";
import { Carousel } from "react-responsive-carousel";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__style-container">
        <img className="contact__image" src={Eric} alt="it me" />

        <div className="contact__card">
          <div className="contact__card-info">
            <p>
              <i class="fas fa-phone"></i>+1 902 430 4660
            </p>
          </div>

          <div className="contact__card-info">
            <p>
              <i class="far fa-envelope-open"></i>pdimech@gmail.com
            </p>
          </div>
          <div className="contact__card-info">
            <p className="contact__card-text">
              Contact me for a free consultation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
