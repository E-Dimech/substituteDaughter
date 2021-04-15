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
              <i class={item.image}></i>
              <h3 className="services__menu-title">{item.title}</h3>
              <div className="services__text-wrp">
                <p className="services__menu-text">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
