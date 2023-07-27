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
      <h1 className="font-bold text-6xl sm:text-9xl mb-10">About</h1>
      <div className="container container-narrow d-lg-flex justify-content-center gap-5 sm:max-w-[600px]">
        <div className="d-flex flex-column-reverse justify-content-between gap-3">
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
          <img
            src={NicoImg}
            alt="Nicolas Alonso"
            className="imagen-nico"
          />
        </div>
        <div className="flex flex-column gap-4">
          <h3 className="text-5xl font-bold">
            I make apps and websites.
            <br className="d-none d-sm-block" />
          </h3>
          <p className="font-light">
            I have always been passionate about technology. My life led me to
            train in different areas, specifically those related to business
            management, giving me an important background in finance.
          </p>
          <p className="font-light">
            Until one day I decided to go back studying what I was really
            passionate about and completed an intensive bootcamp of +800 hours
            in 4 months, graduating with solid knowledge of Javascript, React,
            Redux, SQL, PostgreSQL, Node.js, and Express.
          </p>
          <p className="font-light">
            In my free time I enjoy playing drums and guitar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
