import React from 'react';
import SkillBar from 'react-skillbars';

const Skills = () => {
    const skills = [
        {type: "Java", level: 85},
        {type: "Netbeans", level: 60},
        {type: "PostgreSQL", level: 25},
        {type: "MySQL", level: 30},
        {type: "HTML/CSS", level: 30},
        {type: "React.js", level: 25}
      ];

      const colors = {
        "bar": "#9acdc1",
        "title": {
          "text": "#fff",
          "background": "#5db7a9"
        }
      }


    return (
        <div id="skills" className="skills">
            <div className="container-fluid">
                <h3 className="my-6">skills</h3>
                <div className="skill-container">
                    <SkillBar skills={skills} height={'3vw'} colors={colors}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;