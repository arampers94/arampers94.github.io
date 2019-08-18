import React from 'react';
import './App.css';
import { Row, Col, Button } from 'reactstrap';
import FirstProject from './media/project-1.png';
import CaptureGif from './media/capture.gif';
import Robot from './media/robot.MOV';
import { Player } from 'video-react';
import Portfolio from './media/portfolio-landing-page.png';

function App() {
  return (
    <div id="content">
      <div id="landing-page" className="info">
        <Row id="intro">
          <Col sm="12" md={{ size: 6 }} style={{ margin: "auto", color: "white" }}>
            <h1 style={{ fontSize: "4em" }}>
              Hi, my name's Amar.
            </h1>
            <p style={{ fontSize: "20px", fontStyle: "italic" }}>
              Full Stack Developer. Problem Solver. Solution Finder.
            </p>
            <div id="icons">
              <a className="social-links" href="https://github.com/arampers94">
                <i class="fab fa-github fa-2x" ></i>
              </a>{'   '}
              <a className="social-links" href="https://www.linkedin.com/in/amar-rampersaud/">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </Col>
        </Row>
        <div id="scroll-prompt-wrapper">
          <div>Check out some of my projects</div>
          <i class="fa fa-arrow-down"></i>
        </div>
      </div>
      <div className="projects-wrapper">
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
                <Button outline color="primary" href="https://context-fceab.firebaseapp.com/">View</Button>{' '}
                <Button outline color="success" href="https://github.com/arampers94/Context">Source</Button>{' '}
              </div>
            </Col>
          </Row>
        </div>
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
                <Button outline color="success" href="https://github.com/mouthwash/Capture">Source</Button>{' '}
              </div>
            </Col>
            <Col sm="12" md={{ size: 6 }}>
              <div className="media-block" id="capture-gif">
                <img style={{ width: "65%" }} src={CaptureGif} alt="Second project" />
              </div>
            </Col>
          </Row>
        </div>
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
                <Button outline color="success" href="https://github.com/arampers94/gesture-controlled-robot">Source</Button>{' '}
                <Button outline color="info" href="https://www.arduino.cc/en/Guide/Introduction">What is Arduino?</Button>{' '}
              </div>
            </Col>
          </Row>
        </div>
        <div id="project-4" className="project-block">
          <Row>
            <Col sm="12" md={{ size: 6 }}>
              <div className="project-desc">
                <h1>This Portfolio</h1>
                <p>
                  This site is also one of my projects! I built it myself with React and
                  Bootstrap. The design is simple and straightforward, making it easy to
                  find the important stuff and a pleasure to read. The source code is available
                  on my Github page.
                </p>
                <Button outline color="success" href="/">Source</Button>{' '}
              </div>
            </Col>
            <Col sm="12" md={{ size: 6 }}>
              <div className="media-block">
                <img style={{ width: "100%" }} src={Portfolio} alt="Second project" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
