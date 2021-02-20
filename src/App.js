import "./App.css";
import React from "react";

import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Location from "./Components/Location/Location";
import Contact from "./Components/Contact/Contact";
import Qualifications from "./Components/Qualifications/Qualifications";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <NavBar />
      <Hero title="Hero" name="Hero" id="Hero" />
      <Services />
      <Location />
      <Contact />
      <Qualifications />
      <Testimonials />
    </>
  );
}

export default App;
