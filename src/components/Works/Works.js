import React from "react";
import "./Works.css";
import Stack from "../../images/sv-logo.png";
import  Calculator from "../../images/calculator.png";
import Snake from "../../images/snake-game-icon.png";
import Sat from "../../images/sat.png";
import Pixie from "../../images/pixie.png";
import { themeContext } from "../../Context";
import {useContext} from 'react';


const Works = () => {
  
  const theme = useContext(themeContext)
  const darkMode =theme.state.darkMode;

  return (
    <div className="works" id="works">
      <div className=".left"></div>
      <div className="w-awesome">
        <span style={{ background:darkMode ? 'black' :'' , color:darkMode ?'white' :''}}>Here we have, Some of my</span>
        <span style={{marginBottom:"20px"}}>Some of My projects</span>
        <span >
        Take a look at some of the exciting projects I've worked on recently, <br/> including a Stack Visualizer,a Calculator, a Responsive Webpage, <br/>  a Portfolio, and even a classic Snake Game.  <br/> <br/>Each project showcases my skills in front-end development, and <br/>  I'm excited to bring that expertise to a team. <br/> <br/>So why wait? Hire me today and  let's start <br/> building  something great!
          <a href="" style={{marginTop:"20px"}}>
            <button className="button w-button"> Hire Me</button>
          </a>
        </span>
      </div>
     
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Stack} alt="" id="pixie2" />
          </div>
          <div className="w-secCircle">
          <a href="http://bit.ly/3zhWhoI" target="blank">

            <img src={Calculator} alt=""  id="pixie"/>
            </a>
          </div>
          <div className="w-secCircle" >
          <a href="http://bit.ly/3zhWhoI" target="blank">
            <img src={Pixie} alt="" id="pixie" /></a>
          </div>
          <div className="w-secCircle">
          <a href="http://bit.ly/3zhWhoI" target="blank">

            <img src={Sat} alt="" id="pixie" /></a>
          </div>
          <div className="w-secCircle">
          <a href="http://bit.ly/3zhWhoI" target="blank">

            <img src={Snake} alt="" id="pixie" /></a>
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
