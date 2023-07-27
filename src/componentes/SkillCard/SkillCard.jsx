import React from 'react';

const SkillCard = ({ skillName, skillImage }) => {
    return (
      <div className="card">
        <img src={skillImage} className="card-img-top" alt={skillName} />
        <div className="card-body">
          <h5 className="card-title">{skillName}</h5>
        </div>
      </div>
    );
  };

  export default SkillCard;