import React from 'react'
import "./Footer.css";
import Wave from "../../images/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import GitHub from "@iconscout/react-unicons/icons/uil-github"
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"
import Twitter from "@iconscout/react-unicons/icons/uil-twitter"

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}}/>
        <div className="f-content">

            <a href="" style={{textDecoration:"none", fontSize:"30px",color:"white",fontWeight:"bolder"}}><h2>Satyam Singh Chauhan</h2></a>
            <h2>Lets Connect : Whatsapp <a href='https://wa.me/+919758051994' target="blank"> here</a> </h2>
            <div className="f-icons">
                <a href="http://bit.ly/3TRUPmi" target="blank"><Insta color="white" size='3rem'/></a>
                <a href="http://bit.ly/40silIY" target="blank"><Facebook color="white" size='3rem'/></a>
                <a href="https://bit.ly/3JXkq8H" target="blank"><LinkedIn color="white" size='3rem'/></a>
                <a href="http://bit.ly/3TXvK9M" target="blank"><Twitter color="white" size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
