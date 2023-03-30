import React from "react";
import "./Intro.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedIn from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import Github from "../../images/github.png";
import Vector2 from "../../images/Vector2.png";
import Vector1 from "../../images/Vector1.png";
import Boy from "../../images/boy.png";
import Boy2 from "../../images/Boy2.png";
import Boy3 from "../../images/Boy3.png";
import Pikachu from '../../images/pikachu.png'
import Crown from "../../images/crown.png";
import Thumbup from "../../images/thumbup.png";
import Glasses from "../../images/glasses.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";


const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="home">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}> Hey !  I Am </span>
          <span>Satyam </span>
          <span>
           Frontend Web Developer
          </span>
        </div>
        <a
          href="https://mrsingh2324.github.io/Responsive-web-page/"
          style={{ textDecoration: "none" }}
        >
          <button
            className="button i-button"
            style={{ display: "flex", flex: "1" }}
          >
            Why hire Me
          </button>
        </a>
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/mrsatyamsingh/" target="blank">
            {" "}
            <img src={LinkedIn} alt="FacebookIcon" />{" "}
          </a>
          <a href="https://github.com/mrsingh2324" target="blank">
            {" "}
            <img src={Github} alt="Githubicon" />{" "}
          </a>
          <a href="https://instagram.com/satyamsingh.cc" target="blank">
            {" "}
            <img src={Instagram} alt="Instagram Icon" />{" "}
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="FacebookIcon" />
        <img src={Vector2} alt="FacebookIcon" />
        <img src={Boy} className="boy" alt="FacebookIcon" />
        <img src={Glasses} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" style={{zIndex:"1"}} />
        </div>
        <div style={{ top: "23rem", left: "2.7rem" }}>
          <FloatingDiv image={Thumbup} txt1="I am"txt2="Learning" style={{zIndex:"1"}} />
        </div>
        <div
          className="blur"
          style={{
            backgroundColor: "rgb(238 210 255)",
            top: "9rem",
            left: "23rem",
            width: "21rem",
            height: "11rem",
            zIndex:"0"
          }}
        >
          {" "}
          hello
        </div>
        <div
          className="blur"
          style={{
            backgroundColor: "rgb(238 210 255)",
            top: "19rem",
            width: "21rem",
            height: "11rem",
            left: "-14rem",
            zIndex:"0"
          }}
        >
          {" "}
          hello
        </div>
        {/* I m satyam */}
      </div>
    </div>
  );
};

export default Intro;
