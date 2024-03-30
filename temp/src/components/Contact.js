import React, { Component } from "react";
import Github from "../images/icon/github.png";

import "../styles/Section.css";

class Contact extends Component {
  render() {
    return (
      <div className="container" id="contact">
        <div className="contact">
          <div className="cfont">
            <h1>Contact Me!</h1>
          </div>
          <h1 className="me" style={{ color: "white" }}>
            Email : efgdraw@naver.com
          </h1>
          <h1>　</h1>
          <h1 className="me" style={{ color: "white" }}>
            Github
          </h1>
          <a href="https://github.com/qqueppue" target="_blank">
            <img src={Github} width="50" height="50" />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
