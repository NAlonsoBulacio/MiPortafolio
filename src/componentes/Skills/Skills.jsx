import React from "react";
import reactImage from "../../images/react.png";
import javascriptImage from "../../images/js.png";
import expressImage from "../../images/express.png";
import HtmlImage from "../../images/html.png";
import CssImage from "../../images/css.png";
import NextImage from "../../images/next.png";
import BootImage from "../../images/boot.png";
import NodeImage from "../../images/node.png";
import PgImage from "../../images/pg.png";
import style from "./Skills.module.css";

const Skills = () => {
  const skillsData = [
    { name: "Javascript", image: javascriptImage },
    { name: "HTML", image: HtmlImage },
    { name: "CSS", image: CssImage },
    { name: "React", image: reactImage },
    { name: "NextJS", image: NextImage },
    { name: "Bootstrap", image: BootImage },
    { name: "NodeJS", image: NodeImage },
    { name: "ExpressJS", image: expressImage },
    { name: "PostgreSQL", image: PgImage },
  ];

  return (
    <section id="skills" className="container my-5">
      <h1 className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        Habilidades
      </h1>
      <div className={style.hrContainer}>
        <hr className={style.customHr} />
      </div>
      <div className="d-flex justify-content-center">
        {skillsData.map((skill) => (
          <div key={skill.name} className={style.cardContainer}>
            <img src={skill.image} alt={skill.name} className={style.img} />
            <h5>{skill.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
