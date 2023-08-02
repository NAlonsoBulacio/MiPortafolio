import React from "react";
import "./Header.css";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-md bg-dark sticky-top border-bottom py-4"
      data-bs-theme="dark"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div>
        <a className="navbar-brand nav-link" href="#">
            Nicolás Alonso
          </a>
        </div>
        <div className="custom-container justify-content-center ">
          <ul className="navbar-nav d-flex justify-content-center" style={{marginLeft: "-8px"}}>
            <li className="nav-item d-flex align-items-center">
              <a className="nav-link" href="#about">
                Sobre Mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Habilidades
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/nicolasalons/"
            target="_blank"
            rel="noreferrer"
            className="hover:translate-y-1 duration-300 icon-linkedin"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a
            href="https://github.com/NAlonsoBulacio"
            target="_blank"
            rel="noreferrer"
            className="hover:translate-y-1 duration-300 icon-github"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="mailto:nicoalonso99.na@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:translate-y-1 duration-300 icon-envelope"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
