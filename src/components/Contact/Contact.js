import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import {useContext} from 'react';

const Contact = () => {

  const theme = useContext(themeContext)
  const darkMode =theme.state.darkMode;

  const [done, setDone] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_h1ptfud",
        "template_1tsr6yi",
        form.current,
        "-dVyjtEKG8_SD2U42"
      )
      .then(
        (result) => {
          console.log(result.text);
          // setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  };

  return (
    <div id="contact">
      <div className="contact-form">
        <div className="w-left">
          <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
            <span>Contact me</span>
            <span style={{ color: darkMode ? "white" : "", fontSize:"20px", marginTop:"30px" }}>Send a personal message direct to me ..</span>
            
          </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail} className='form'>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea
             name="message"
              className="user"
               placeholder="Message" />
            <input
              type="submit"
              value="Send"
              className="button"
            />
            {/* <span>{done && "thanks for contacting"}</span> */}
          </form>
            <div
              className="blur c-blur1"
            ></div>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
