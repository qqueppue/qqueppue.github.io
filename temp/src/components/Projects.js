import React, { Component } from "react";
import Typical from "react-typical";
import Modal from "react-awesome-modal";
import Slider from "react-slick";

import { dice01, dice02, dice03, portfolio01 } from "../images/index";

class Projects extends Component {
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
        <div className="projects">
          <div className="sfont">
            <h1>
              <Typical
                steps={["", 1000, "Projects", 4000]}
                loop={Infinity}
                wrapper="p"
              />
            </h1>
          </div>
          <h1 className="title">.DICE GAME.</h1>
          <div className="project">
            <a onClick={() => this.openModal()}>
              <img src={dice01} className="projectImg" />
            </a>
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
                    <div className="project">
                      <h3>1</h3>
                    </div>
                  </div>
                  <div>
                    <div className="project">
                      <h3>2</h3>
                    </div>
                  </div>
                  <div>
                    <div className="project">
                      <h3>3</h3>
                    </div>
                  </div>
                  <div>
                    <div className="project">
                      <h3>4</h3>
                    </div>
                  </div>
                  <div>
                    <div
                      className="project"
                      style={{ backgroundColor: "green", height: 200 }}
                    >
                      <h3>5</h3>
                    </div>
                  </div>
                </Slider>
              </section>
            </Modal>
          </div>
          <div className="project">
            <h1 className="title">.portfolio.</h1>
            <a onClick={() => this.openModal()}>
              <img src={portfolio01} className="projectImg" />
            </a>

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
                    <div className="project">
                      <h3>1</h3>
                    </div>
                  </div>
                  <div>
                    <div className="project">
                      <h3>1</h3>
                    </div>
                  </div>
                </Slider>
              </section>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
