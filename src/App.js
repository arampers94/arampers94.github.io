import React, { Component } from 'react';
import './App.css';
import { Row, Col, Button } from 'reactstrap';
import FirstProject from './Resources/project-1.png';
import CaptureGif from './Resources/capture.gif';
import Robot from './Resources/robot.MOV';
import { Player } from 'video-react';
import Portfolio from './Resources/portfolio-landing-page.png';
import MyNavbar from './components/Navbar/index';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class App extends Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div id="content">
        <div id="landing-page" className="info">
          <div id="intro">
            <Row style={{ width: "100%" }}>
              <MyNavbar />
            </Row>
            <Row>
              <div style={{ margin: "auto", color: "white" }}>
                <h1 style={{ fontSize: "4em" }}>
                  Hi, my name's Amar.
                </h1>
                <p style={{ fontSize: "20px", fontStyle: "italic" }}>
                  Full Stack Developer. Problem Solver. Solution Finder.
                </p>
                <div id="icons">
                  <a className="social-links" href="https://github.com/arampers94" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x" ></i>
                  </a>{' '}
                  <a className="social-links" href="https://www.linkedin.com/in/amar-rampersaud/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>{' '}
                  <a className="social-links" href="mailto:arampers94@gmail.com">
                    <i className="far fa-envelope fa-2x"></i>
                  </a>
                </div>
              </div>
            </Row>
            <Row>
              <div id="scroll-prompt-wrapper">
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                  <a id="scroll-prompt" href="/"><i class="fas fa-chevron-down fa-4x"></i></a>
                </Link>
              </div>
            </Row>
          </div>
          {/* End intro */}
        </div>
        {/* End landing page */}
        <Element name="about" className="element">
          <div id="about-container" className="project-block">
            <Row style={{ paddingBottom: "50px" }}>
              <Col>
                <h1>You're going to want me on your team.</h1>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col className="about-col">
                <h5>I am...</h5>
                <p>
                  A full stack developer, passionate about code and always
                  looking to improve my craft however I can. I enjoy learning
                  new technologies on my own as well as from others. I am also
                  confident in my ability to quickly translate new skills to
                  production.
                </p>
              </Col>
              <Col className="about-col">
                <h5>Why me?</h5>
                <p>
                  In addition to being a motivated self-starter, adaptable, and a fast-learner,
                  I am also friendly, have excellent communication skills, open to new
                  ideas, and can work independently as well as collaboratively.
                 </p>
              </Col>
              <Col className="about-col">
                <h5>I'm looking for...</h5>
                <p>
                  The opportunity to apply my problem-solving and web dev skills
                  to solve some of the industry's toughest challenges in order to
                  increase efficiency and reduce costs, work alongside
                  creative, talented, and motivated individuals of all backgrounds,
                  and continue improving my skills.
                </p>
              </Col>
            </Row>
          </div>
        </Element>
        {/* End about container */}
        <Element name="projects" className="element"></Element>
        <Element name="projets-inner" className="element">
          <div className="projects-wrapper">
            <div id="project-section-title">
              <h1>Some of my recent work</h1>
              <hr />
            </div>
            <div id="project-1" className="project-block">
              <Row>
                <Col sm="12" md={{ size: 6 }}>
                  <div className="media-block">
                    <img style={{ width: "100%" }} src={FirstProject} alt="First project" />
                  </div>
                </Col>
                <Col sm="12" md={{ size: 6 }}>
                  <div className="project-desc">
                    <h1>Context</h1>
                    <p>
                      A personal project I built to demonstrate my skill and comfort working
                      across the full stack from front-end design to back-end data management.
                      It works the same way you would expect a typical blog site to - users have
                      the ability to sign up, create, rate, and comment on posts.
                    </p>
                    <Button outline color="primary" href="https://context-fceab.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                      View
                    </Button>{' '}
                    <Button outline color="success" href="https://github.com/arampers94/Context" target="_blank" rel="noopener noreferrer">
                      Source
                    </Button>{' '}
                  </div>
                </Col>
              </Row>
            </div>
            {/* End project 1 */}
            <div id="project-2" className="project-block">
              <Row>
                <Col sm="12" md={{ size: 6 }}>
                  <div className="project-desc">
                    <h1>Capture</h1>
                    <p>
                      This is one of the more fun projects I've had the opportunity to work on. Built
                      with React Native, this simple cross-platform smartphone app allows users to create,
                      update, delete notes, and set reminders. It also features an experience bar
                      and a level up system as an incentive for the user to keep using the app.
                    </p>
                    <Button outline color="success" href="https://github.com/mouthwash/Capture" target="_blank" rel="noopener noreferrer">
                      Source
                    </Button>{' '}
                  </div>
                </Col>
                <Col sm="12" md={{ size: 6 }}>
                  <div className="media-block" id="capture-gif">
                    <img style={{ width: "65%" }} src={CaptureGif} alt="Second project" />
                  </div>
                </Col>
              </Row>
            </div>
            {/* End project 2 */}
            <div id="project-3" className="project-block">
              <Row>
                <Col sm="12" md={{ size: 6 }}>
                  <div className="media-block" id="robot-video">
                    <Player
                      playsInline
                      src={Robot}
                      className="media-block"
                    />
                  </div>
                </Col>
                <Col sm="12" md={{ size: 6 }}>
                  <div className="project-desc">
                    <h1>Gesture Controlled Robot</h1>
                    <p>
                      <em>I built an actual remote controlled bot, how cool is that!? </em>
                      That's exactly what I thought once I finally got this one up and running. As the name
                      suggests, the bot responds to gestures given by the remote. The bot and remote
                      communicate through Arduino microprocessors. Check it out in action.
                    </p>
                    <Button outline color="success" href="https://github.com/arampers94/gesture-controlled-robot" target="_blank" rel="noopener noreferrer">
                      Source
                    </Button>{' '}
                    <Button outline color="info" href="https://www.arduino.cc/en/Guide/Introduction" target="_blank" rel="noopener noreferrer">
                      What is Arduino?
                    </Button>{' '}
                  </div>
                </Col>
              </Row>
            </div>
            {/* End project 3 */}
            <div id="project-4" className="project-block">
              <Row>
                <Col sm="12" md={{ size: 6 }}>
                  <div className="project-desc">
                    <h1>This Portfolio</h1>
                    <p>
                      This site is also one of my projects! I built it myself with HTML, CSS,
                      JS, and React. The design is simple and intuitive, making it easy to
                      find the important stuff and a pleasure to read. The source code is available
                      on my Github page.
                    </p>
                    <Button outline color="success" href="https://github.com/arampers94/Portfolio" target="_blank" rel="noopener noreferrer">
                      Source
                    </Button>{' '}
                  </div>
                </Col>
                <Col sm="12" md={{ size: 6 }}>
                  <div className="media-block">
                    <img style={{ width: "100%" }} src={Portfolio} alt="Second project" />
                  </div>
                </Col>
              </Row>
            </div>
            {/* End project 4 */}
          </div>
        </Element>
        {/* End projects wrapper */}
        <Element name="contact" className="element">
          <div id="contact-info-section" className="project-block">
            <Row>
              <Col>
                <h1>Sound good? Let's get to work.</h1>
                <p>Feel free to reach out to me via email or LinkedIn</p>
                <a className="social-links" href="https://www.linkedin.com/in/amar-rampersaud/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>{' '}
                <a className="social-links" href="mailto:arampers94@gmail.com">
                  <i class="far fa-envelope fa-2x"></i>
                </a>
              </Col>
            </Row>
          </div>
        </Element>
      </div>
      // End content
    );
  }
}

export default App;
