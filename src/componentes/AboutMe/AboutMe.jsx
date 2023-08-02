import React from "react";
import "./AboutMe.css";
import NicoImg from "../../images/nico.jpg";
import Resume from "../Resume/Resume";
import { useLanguage } from "../Language/LanguageContext";

const AboutMe = () => {
  const { language } = useLanguage();
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center mb-5 mt-20 text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
    >
      <h1 className="font-bold text-6xl sm:text-9xl mb-10">
        {language === "es" ? "Sobre Mi" : "About Me"}
      </h1>
      <div className="hr-container">
        <hr className="custom-hr" />
      </div>
      <div className="container container-narrow d-lg-flex justify-content-center gap-5 sm:max-w-[600px]">
        <div
          className="d-flex flex-column-reverse justify-content-between gap-3"
          style={{ marginTop: "40px", marginRight: "50px" }}
        >
          <div className="d-flex gap-5" style={{ marginLeft: "89px" }}>
            <Resume />
          </div>
          <img src={NicoImg} alt="Nicolas Alonso" className="imagen-nico" />
        </div>
        <div className="flex flex-column gap-4" style={{ marginLeft: "50px" }}>
          <h3 className="text-5xl font-bold">
            {language === "es"
              ? "Desarrollador de aplicaciones en Javascript"
              : "Javascript Web Developer"}
            <br className="d-none d-sm-block" />
          </h3>
          <p className="p">
            {language === "es"
              ? "Disfruto mucho el trabajo creativo, aprender con mis compañeros y estudiar. Pasé por distintos ámbitos como la Agronomia, Música y programación! Desde mis inicios en el E-Commerce quedé fascinado con la tecnologia, el diseño web y el marketing."
              : "I really enjoy creative work, learning with my colleagues, and studying. I have gone through different fields such as Agronomy, Music, and programming! Since my beginnings in E-Commerce, I have been fascinated with technology, web design, and marketing."}
          </p>
          <p className="p">
            {language === "es"
              ? "Decidí estudiar la carrera de Full Stack Developer y completé un bootcamp intensivo de más de 800 horas en 4 meses, graduándome con un sólido conocimiento de Javascript, React, Redux, SQL, PostgreSQL, Node.js y Express.."
              : "I decided to pursue a career as a Full Stack Developer and completed an intensive bootcamp of over 800 hours in 4 months, graduating with a strong knowledge of Javascript, React, Redux, SQL, PostgreSQL, Node.js, and Express."}
          </p>
          <p className="p">
            {language === 'es' ? "En mi tiempo libre disfruto tocar musica y hacer ejercicio." : "In my free time, i enjoy playing music and exercising"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
