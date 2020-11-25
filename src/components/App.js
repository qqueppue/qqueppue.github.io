import React, { Component } from "react";
import Typical from "react-typical";
import "../styles/App.css";

import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";
import Skils from "./Skils";
import Contact from "./Contact";
import Projects from "./Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='row'>
          <div className='col'>
            <nav className="nav">
              <div className="logo">
                <a href="#">HEY!</a>
              </div>
              <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                  <li><a href="#aboutMe">AboutMe</a></li>
                  <li><a href="#skils">Skils</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </nav>
          </div>
          <section className="home">
            <div className="homealign">
              <p className="myF">
                <Typical
                  steps={["안녕하세요.",2000,"안녕하세요. 풀스택 개발자 한은영입니다.",2000]}
                  loop={Infinity}
                  wrapper="p"
                />
              </p>
            </div>
          </section>
          <div>
            {/* <AboutMe /> */}
            <Skils />
            <Projects/>
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
