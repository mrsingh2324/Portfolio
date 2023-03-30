import "./NavBar.css";
import React from "react";
import Toggle from "../Toggle/Toggle.js";

function NavBar() {
  const jumpToRelevantDiv = (id) => {
    const relevantDiv = document.getElementById(id);
    relevantDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App" id="NavBar">
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">/mrsingh2324</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ cursor: "pointer" }}>
              <li onClick={() => jumpToRelevantDiv("home")}>Home</li>
              <li onClick={() => jumpToRelevantDiv("services")}>Services</li>
              <li onClick={() => jumpToRelevantDiv("works")}>Works</li>
              <li onClick={() => jumpToRelevantDiv("portfolio")}>Portfolio</li>
              <li onClick={() => jumpToRelevantDiv("contact")}>  Contact</li>
            </ul>
          </div>
          <button className="button n-button"> <a href="https://linktr.ee/mrsingh2324" style={{textDecoration:"none", fontWeight:"bold"}}>Contact Me</a> </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
