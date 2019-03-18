import React from "react";
import "../SkillBox/skillBox.css";
import cPlus from "../../images/languageIcons/c++Logo.png";
import cSharp from "../../images/languageIcons/cSharpLogo.png";
import cLogo from "../../images/languageIcons/cLogo.png";

const SkillBox = () => {
  return (
    <div className="skillBox">
      <i className="fab fa-html5 icon fontAwe">
        <br />
        HTML
      </i>
      <i className="fab fa-css3 icon fontAwe">
        <br />
        CSS
      </i>
      <i className="fab fa-js icon fontAwe">
        <br />
        JS
      </i>
      <i className="fab fa-react icon fontAwe">
        <br />
        React
      </i>
      <i className="fab fa-python icon fontAwe">
        <br />
        Python
      </i>
      <i className="fab fa-java icon fontAwe">
        <br />
        Java
      </i>
      <i className="fas fa-database icon fontAwe">
        <br />
        SQL
      </i>
      <img src={cPlus} width="100px" alt="" className="cPlus cIcon icon" />
      <img src={cSharp} width="100px" alt="" className="cSharp cIcon icon" />
      <img src={cLogo} width="100px" alt="" className="cLogo cIcon icon" />
    </div>
  );
};

export default SkillBox;
