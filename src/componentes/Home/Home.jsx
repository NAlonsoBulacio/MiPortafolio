import React from "react";
import './Home.css';

const Home = () => {
  return (
    <section
      id="home"
      className="home-container flex flex-col justify-center items-center mb-5 mt-20 text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
    >
      <h1 className="h1">Bienvenido!<span role="img" aria-label="Saludo">
        👋
      </span>Soy Nicolas Alonso y este es mi Portafolio.</h1>
      <h3 className="h3">Full Stack Developer</h3>
    </section>
  );
};

export default Home;
