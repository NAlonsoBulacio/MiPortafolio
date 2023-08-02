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
import TwImage from '../../images/tw.png'
import TsImage from '../../images/ts.png'
import SqImage from '../../images/sq.png'
import MongoImage from '../../images/mongo.png'
import FireImage from '../../images/fire.png'
import style from "./Skills.module.css";
import { useLanguage } from "../Language/LanguageContext";
const Skills = () => {
  const { language } = useLanguage();
  const skillsData = [
    { name: "Javascript", image: javascriptImage },
    { name: 'Typescript', image: TsImage},
    { name: "HTML", image: HtmlImage },
    { name: "CSS", image: CssImage },
    { name: "React", image: reactImage },
    { name: "NextJS", image: NextImage },
    { name: "Bootstrap", image: BootImage },
    { name: 'Tailwind', image: TwImage},
    { name: "NodeJS", image: NodeImage },
    { name: "ExpressJS", image: expressImage },
    { name: "PostgreSQL", image: PgImage },
    { name: "Sequelize", image: SqImage },
    { name: 'MongoDB', image: MongoImage},
    { name: 'Firebase', image: FireImage}
  ];

  return (
    <section id="skills" className="container my-5">
      <h1 className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        {language === 'es' ? "Habilidades" : "Skills"}
      </h1>
      <div className={style.hrContainer}>
        <hr className={style.customHr} />
      </div>
      <div className="row justify-content-center">
        {skillsData.map((skill) => (
          <div key={skill.name} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className={style.cardContainer}>
              <img src={skill.image} alt={skill.name} className={style.img} />
              <h5>{skill.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
