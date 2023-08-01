import React from "react";
import "./AboutMe.css";
import NicoImg from "../../images/nico.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center mb-5 mt-20 text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
    >
      <h1 className="font-bold text-6xl sm:text-9xl mb-10">Sobre Mi</h1>
      <div className="hr-container">
        <hr className="custom-hr" />
      </div>
      <div className="container container-narrow d-lg-flex justify-content-center gap-5 sm:max-w-[600px]">
        <div className="d-flex flex-column-reverse justify-content-between gap-3" style={{ marginTop:"40px" ,marginRight: "50px" }}>
          <div className="d-flex gap-5" style={{ marginLeft: "89px" }}>
            <a
              href="https://www.linkedin.com/in/nicolasalons/"
              target="_blank"
              rel="noreferrer"
              className="hover:translate-y-1 duration-300"
            >
              <FaLinkedinIn size={40} />
            </a>
            <a
              href="https://github.com/NAlonsoBulacio"
              target="_blank"
              rel="noreferrer"
              className="hover:translate-y-1 duration-300"
            >
              <FaGithub size={40} />
            </a>
          </div>
          <img src={NicoImg} alt="Nicolas Alonso" className="imagen-nico" />
        </div>
        <div className="flex flex-column gap-4" style={{ marginLeft: "50px" }}>
          <h3 className="text-5xl font-bold">
            Desarrollador de aplicaciones en Javascript
            <br className="d-none d-sm-block" />
          </h3>
          <p className="p">
            Disfruto mucho el trabajo en equipo y estudiar, pase por distintos
            ambitos como la Agronomia, Música y ahora programación! Desde mis
            inicios en el E-Commerce quedé fascinado con la tecnologia, el
            diseño web y el marketing.
          </p>
          <p className="p">
            Decidí estudiar la carrera de Full Stack Developer y completé un
            bootcamp intensivo de más de 800 horas en 4 meses, graduándome con
            un sólido conocimiento de Javascript, React, Redux, SQL, PostgreSQL,
            Node.js y Express..
          </p>
          <p className="p">
            En mi tiempo libre disfruto tocar musica y hacer ejercicio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
