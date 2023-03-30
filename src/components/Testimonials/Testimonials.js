import React from "react";
import "./Testimonials.css";

import { themeContext } from "../../Context";
import {useContext} from 'react';

const Testimonials = () => {
  
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  const clients = [
    {
      img: "profilepic1",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, praesentium!",
    },
    {
      img: "profilepic1",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, praesentium!",
    },
    {
      img: "profilepic1",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, praesentium!",
    },
    {
      img: "profilepic1",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, praesentium!",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me ...  <h6>(this is just an illusion xoxo)</h6></span>
        <div className="blur t-blur1" style={{ background: "purple" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <div className="swiper">
        {clients.map((clients, index) => {
          return (
            <div className="testimonial" style={{borderImage: darkMode ? "linear-gradient(blue,rgba(255,255,255,0) 1 100%" : ""}}>
              <img src={clients.img} alt="" />
              <span>{clients.review}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
