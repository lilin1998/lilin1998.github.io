import React from 'react';
import SkillBar from 'react-skillbars';

const Skills = () => {
    const skills = [
        {type: "Java", level: 85},
        {type: "Netbeans", level: 60},
        {type: "pgSQL", level: 25},
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
          <SkillBar skills={skills} height={'4vw'} colors={colors}/>
        </div>
    );
}

export default Skills;