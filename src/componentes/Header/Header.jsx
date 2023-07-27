import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand d-md-none" href="#">
      <svg className="bi" width="24" height="24"></svg>
      Aperture
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav flex-grow-1 justify-content-between">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">Sobre Mi</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Proyectos</a></li>
          <li className="nav-item"><a className="nav-link" href="#skills">Habilidades</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contactame</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Header;
