import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavBar.scss";
// import Logo from "../../Assets/Images/logo.png";

import { Link } from "react-scroll";
// import MediaQuery from "react-responsive";

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
            <span className="nav__logo-title">Substitute Daughter</span>
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
