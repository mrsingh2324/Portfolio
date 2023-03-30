import React from "react";
import "./Services.css";
import CV from '../../images/CV.pdf'
import Heart from "../../images/heartemoji.png";
import Humble from "../../images/humble.png";
import Card  from "../Card/Card";
import Glasses from "../../images/glasses.png"

import { useContext } from "react";
import { themeContext } from "../../Context";

const Services = () => {
  const theme= useContext(themeContext)
  const darkMode=theme.state.darkMode;

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome" >
        <span style={{color: darkMode ? "white" :""}}>Some of My</span>
        <span>Skills</span>
        <span>
        With a unique combination of skills in front-end development, <br/>  machine learning, and DevOps, I possess a broad range <br/> of abilities that enable me to tackle complex <br/> software development projects.
        </span>
        <a href={CV} download><button className="button s-button"> Download CV</button>
        </a></div>
      <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>

      {/* right side */}
      <div className="cards">
        {/* <h1>I m the right side</h1> */}
        <div style={{left:"27rem"}}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, CSS, Javascript, React"}
          />
        </div>
        <div style={{top:"16rem", left:"-15rem"}}>
          <Card
            emoji={Heart}
            heading={"ML Engineer"}
            detail={"Python, TensorFlow, Kaggle"}
          />
        </div>
        <div style={{top:"10rem", left:"6rem"}}>
          <Card
            emoji={Humble}
            heading={"Devops"}
            detail={"Docker, Github, Kubernetes , Ansible "}
          />
        </div>
        <div style={{top:"21rem", left:"27rem"}}>
          <Card
            emoji={Humble}
            heading={"Problem Solving"}
            detail={"Java, DSA"}
          />
        </div>
        <div className="blur s-blur2" ></div>
        <div className="blur s-blur1" ></div>

      </div>
    </div>
  );
};

export default Services;
