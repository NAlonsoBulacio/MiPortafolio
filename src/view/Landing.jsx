import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";
import AboutMe from "../componentes/AboutMe/AboutMe";
import Proyecto from "../componentes/Proyecto/Proyecto";
import Skills from "../componentes/Skills/Skills";
import Home from "../componentes/Home/Home";
import "../blog.css";

const Landing = () => {
  return (
    <div className="smooth-scroll fragment bg-dark ">
      <Header />
      <Home />
      <div className="containerAbout bg-dark">
        <AboutMe />
      </div>
      <Proyecto />
      <Skills />
      <Footer />
    </div>
  );
};

export default Landing;
