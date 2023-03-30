import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import {useContext} from 'react';

function App() {
  const theme = useContext(themeContext)
  const darkMode =theme.state.darkMode;
  return (
    <div className="App" style={{ background: darkMode ? "black":"", color: darkMode ? 'white': ""}}>
      <NavBar />
      <Intro id="intro" />
      <Services id="services" />
      <Experience id="experience" />
      <Works id="works" />
      <Portfolio id="portfolio" />
      {/* <Testimonials id="testimonials" /> */}
      <Contact id="contact" />
      <Footer />
    </div>
  );
}


export default App;
