import React from "react";
import "./NavBar.scss";
import Logo from "../../Assets/Images/logo.png";

import { Link } from "react-scroll";

export default function NavBar() {
  // scrollToTop = {
  //     scroll.scrollToTop()
  //   };
  return (
    <>
      <nav className="nav" id="navbar">
        <div className="nav__content">
          <img
            src={Logo}
            className="nav__logo"
            alt="Substitute Daughter"
            // onClick={scrollToTop}
          />
          <ul className="nav__items">
            {/* <Link
              activeClass="active"
              className="nav__list"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Hero
            </Link> */}

            <Link
              activeClass="active"
              className="nav__list"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>

            <Link
              activeClass="active"
              className="nav__list"
              to="location"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Location
            </Link>

            <Link
              activeClass="active"
              className="nav__list"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
            <Link
              activeClass="active"
              className="nav__list"
              to="qualifications"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Qualifications
            </Link>
            <Link
              activeClass="active"
              className="nav__list"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Testimonials
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
