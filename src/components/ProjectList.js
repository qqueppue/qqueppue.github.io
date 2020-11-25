import React, { Component } from "react";
import Typical from "react-typical";
import "../styles/Section.css";

import Slider from "react-slick";
import Modal from "react-awesome-modal";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="container" id="projects">
        <div className='projects'>
          <div className="sfont">
            <h1><Typical steps={['', 1000, 'Projects', 4000]} loop={Infinity} wrapper='p' /></h1>
          </div>
        </div>
        {/* 나중에 DB와 연결하여 소스정리 OR Map 사용 */}
        <input type="button" value="Open" onClick={() => this.openModal()} />
        <Modal
          visible={this.state.visible}
          width="80%"
          height="70%"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <section className="slides">
            <Slider {...settings}>
              <div>
                <div className='project' >
                  <h3>1</h3>
                </div>
                dkssudgktpdy
              </div>
              <div>
                <div className='project' >
                  <h3>2</h3>
                </div>
              </div>
              <div>
                <div className='project' >
                  <h3>3</h3>
                </div>
              </div>
              <div>
                <div className='project' >
                  <h3>4</h3>
                </div>
              </div>
              <div>
                <div className='project' style={{ backgroundColor: "green", height: 200 }}>
                  <h3>5</h3>
                </div>
              </div>
            </Slider>
          </section>
        </Modal>
      </div>
    );
  }
}

export default ProjectList;
