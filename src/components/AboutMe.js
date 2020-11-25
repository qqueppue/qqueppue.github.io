import React, { Component } from "react";
import Typical from "react-typical";

class Section extends Component {
  render() {
    return (
      <div className="container" id='aboutMe'>
        <div className='aboutMe'>
          <div className='sfont'>
            <h1><Typical steps={['', 1000, 'About Me', 4000]} loop={Infinity} wrapper='p' /></h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
