import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";
import AboutMe from "../componentes/AboutMe/AboutMe";
import Proyecto from "../componentes/Proyecto/Proyecto";
import Theme from "../componentes/Theme/Theme";
import Skills from "../componentes/Skills/Skills";
import Home from "../componentes/Home/Home";
import Resume from "../componentes/Resume/Resume";
import "../blog.css";

const Landing = () => {
  return (
    <div className="fragment bg-dark">
      <Header />
      <Home />
      <div className="containerAbout bg-dark">
        <AboutMe />
      </div>
      <Proyecto />
      <Resume />
      <Skills />
      <Theme />
      <Footer />
    </div>
  );
};

export default Landing;
