import React, { Component } from 'react';
import Typical from 'react-typical';
import {
  CSS,
  Html5,
  Java,
  Javascript,
  Mysql,
  Nodejs,
  Python,
  RaspberryPi,
  Rreact,
  SpringBoot,
  Github,
} from '../images/icon';

class Skils extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='container' id='skils'>
              <div className='skils'>
                <div className='sfont'>
                  <h1>
                    <Typical steps={['', 1000, 'Skills', 4000]} loop={Infinity} wrapper='p' />
                  </h1>
                </div>
                <p className='title'>Language</p>
                <div className='skill'>
                  <img src={Python} width='100' height='100' alt='' style={{ marginRight: 30, marginLeft: 30}} />
                  <img src={Java} width='100' height='100'  alt='' style={{ marginRight: 30, marginLeft: 30}} />
                  <img  src={Javascript} width='100' height='100' alt='' style={{ marginRight: 30, marginLeft: 30}} />
                  <img src={Html5}  width='100' height='100' alt='' style={{ marginRight: 30, marginLeft: 30}} />
                  <img src={CSS} width='100' height='100' alt='' />
                </div>
                <p className='title'>FrameWork</p>
                <div className='skill'>
                  <img src={Rreact} width='100' height='100' alt='' className='skill' style={{ marginRight: 30, marginLeft: 30}} />
                  <img src={Nodejs} width='100' height='100' alt='' style={{ marginRight: 30, marginLeft: 30}} />
                  <img src={SpringBoot} width='100' height='100' alt='' />
                </div>
                <p className='title'>DataBase</p>
                <div className='skill'>
                  <img src={Mysql} width='100' height='100' alt='' style={{ marginRight: 30, marginLeft: 30}} />
                </div>
                <p className='title'>else</p>
                <div className='skill'>
                  <img src={RaspberryPi} width='100' height='100' alt='' style={{ marginRight: 30, marginLeft: 30}} />
                  <img src={Github} width='100' height='100' alt=''  style={{ marginRight: 30, marginLeft: 30}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skils;
