import React from 'react'
import "./Experience.css"
import { themeContext } from "../../Context";
import {useContext} from 'react';

const Experience = () => {
  const theme = useContext(themeContext)
  const darkMode =theme.state.darkMode;
  return (
    <div>
      <div className="experience" >
        <div className="achievement">
            <div className="circle"  style={{ background:darkMode ? 'white' :'' , color:darkMode ?'black' :''}}>3</div>
            <span>Months</span>
            <span>Experience</span>
            <span>Building the foundation !</span>
        </div>
        <div className="achievement" >
            <div className="circle"  style={{ background:darkMode ? 'white' :'' , color:darkMode ?'black' :''}}>4+</div>
            <span>Completed</span>
            <span>Projects</span>
            <span>Others are on the way !</span>
        </div>
        <div className="achievement">
            <div className="circle"  style={{ background:darkMode ? 'white' :'' , color:darkMode ?'black' :''}}>3rd</div>
            <span>Year</span>
            <span>Student</span>
            <span>Lovely Professional University</span>
        </div>
      </div>
    </div>
  )
}

export default Experience
