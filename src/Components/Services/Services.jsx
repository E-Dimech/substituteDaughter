import React from "react";
import { ServiceMenu } from "./ServiceMenu";
import "./Services.scss";

function Services() {
  return (
    <div className="services" id="services">
      <h2 className="services__title">Services</h2>
      <div className="services__menu-wrp">
        {ServiceMenu.map((item, index) => {
          return (
            <div className={item.cName} key={index}>
              <img
                className="services__menu-img"
                src={item.image}
                alt={item.alt}
              />
              <h3 className="services__menu-title">{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
