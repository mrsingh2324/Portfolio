import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Pixie from "../../images/Pixie-wallpaper.PNG";

import Snake from "../../images/snake-wallpaper.PNG";
import Calculator from "../../images/calculator-wallpaper.PNG";
import Stack from "../../images/stack-visualizer-wallpaper.PNG";

import { themeContext } from "../../Context";
import {useContext} from 'react';

const Portfolio = () => {
  
  const theme = useContext(themeContext)
  const darkMode =theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode ? "white" :""}}>Recent Projects</span>
      <span><a href="/" style={{textDecoration:"none",textDecoration:"underline"}}> PortFolio ! </a></span>
      <span style={{color: darkMode ? "white" :"", marginBottom:'20px'}}> <h2>swipe right - - -</h2>  </span>
      {/* slider */}
      <div className="swiper">
        <div className="slider">
        <a href="http://bit.ly/3ZwPj9L">
          <img src={Pixie} alt="" /></a>
        </div>
        <div>
        <a href="http://bit.ly/3TRliR5">
          <img src={Snake} alt="" /></a>
        </div>
        <div>
        <a href="http://bit.ly/42Oc7F5">
          <img src={Stack} alt="" /></a>
        </div>
        <div>
        <a href="http://bit.ly/3G1R7Ru">
          <img src={Calculator} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
