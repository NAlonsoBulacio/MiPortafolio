import React from "react";
import { useLanguage } from "../Language/LanguageContext";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import Resume from "../Resume/Resume";
const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center align-items-center justify-content-center">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                <a
                  href="mailto:nicoalonso99.na@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="mr-2 mb-0" style={{ marginRight: "5px" }}>
                    nicoalonso99.na@gmail.com
                  </p>
                  <FaEnvelope
                    size={25}
                    className="hover:translate-y-1 duration-300 icon-envelope"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center align-items-center justify-content-center">
            <Resume />
          </div>
          <div className="col-md-4 justify-content-between align-items-center">
            <a
              href="https://www.linkedin.com/in/nicolasalons/"
              target="_blank"
              rel="noreferrer"
              className="hover:translate-y-1 duration-300 icon-linkedin"
            >
              <FaLinkedinIn size={40} style={{ marginRight: "10px" }} />
            </a>
            <a
              href="https://github.com/NAlonsoBulacio"
              target="_blank"
              rel="noreferrer"
              className="hover:translate-y-1 duration-300 icon-github"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p>Todos los derechos reservados - Desarrollado por Nico</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
