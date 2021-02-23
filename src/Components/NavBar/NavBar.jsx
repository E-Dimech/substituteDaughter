import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavBar.scss";
// import Logo from "../../Assets/Images/logo.png";

import { Link } from "react-scroll";
// import MediaQuery from "react-responsive";

// export default function NavBar() {
//   // scrollToTop = {
//   //     scroll.scrollToTop()
//   //   };
//   return (
//     <>
//       <nav className="nav" id="navbar">
//         <div className="nav__content">
//           <img
//             src={Logo}
//             className="nav__logo"
//             alt="Substitute Daughter"
//             // onClick={scrollToTop}
//           />
//           <ul className="nav__items">
//             {/* <Link
//               activeClass="active"
//               className="nav__list"
//               to="hero"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               Hero
//             </Link> */}

//             <Link
//               activeClass="active"
//               className="nav__list"
//               to="services"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               Services
//             </Link>

//             <Link
//               activeClass="active"
//               className="nav__list"
//               to="location"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               Location
//             </Link>

//             <Link
//               activeClass="active"
//               className="nav__list"
//               to="contact"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               Contact
//             </Link>
//             <MediaQuery minDeviceWidth={768}>
//               <Link
//                 activeClass="active"
//                 className="nav__list"
//                 to="qualifications"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Qualifications
//               </Link>
//               <Link
//                 activeClass="active"
//                 className="nav__list"
//                 to="testimonials"
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 Testimonials
//               </Link>
//             </MediaQuery>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

class NavBar extends Component {
  state = {
    active: false,
  };

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  hideBurger = () => {
    this.setState({ active: false });
  };

  render() {
    return (
      <>
        <nav className="nav">
          <Link className="nav__logo-link" to="/">
            <span className="nav__logo-title">E</span>
          </Link>

          <div className="nav__menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.active ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.active ? "nav__menu-active" : "nav__menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    activeClass="active"
                    to={item.to}
                    onClick={this.hideBurger}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <p className={item.cName}>{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}

export default NavBar;
