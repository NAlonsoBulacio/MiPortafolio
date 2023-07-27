import React from 'react';
import reactImage from '../../images/react.png';
import javascriptImage from '../../images/javascr.png';
import expressImage from '../../images/express.png';
import style from './Skills.module.css'

const Skills = () => {

  const skillsData = [
    { name: 'React', image: reactImage },
    { name: 'JavaScript', image: javascriptImage },
    { name: 'Express', image: expressImage },
  ];

  return (
    <section 
    id='skills'
    className="container my-5">
      <h1 className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">Habilidades</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {skillsData.map((skill) => (
        <div key={skill.name} className={style.cardContainer}>
        <h2>{skill.name}</h2>
        <img src={skill.image} alt={skill.name} className={style.img}/>
      </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;