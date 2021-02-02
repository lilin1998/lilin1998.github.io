import React from "react";
import SkillBar from "react-skillbars";

const Skills = () => {
  const skills = [
    { type: "Java", level: 85 },
    { type: "Netbeans", level: 80 },
    { type: "Material UI", level: 60 },
    { type: "Django", level: 50 },
    { type: "HTML/CSS", level: 80 },
    { type: "ReactJS", level: 65 },
  ];

  const colors = {
    bar: "#9acdc1",
    title: {
      text: "#fff",
      background: "#5db7a9",
    },
  };

  return (
    <div id="skills" className="skills">
      <SkillBar skills={skills} height={"4vw"} colors={colors} />
    </div>
  );
};

export default Skills;
