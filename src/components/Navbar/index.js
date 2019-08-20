import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-scroll'

class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Navbar id="navbar" fixed="top" color="rgb(0, 0, 0)" dark expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto">
              <NavItem>
                <Link activeClass="active" className="home" to="intro" spy={true} smooth={true} duration={500}>
                  <NavLink className="navlink" href="/">Home</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500}>
                  <NavLink className="navlink" href="/">About</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link activeClass="active" className="projects" to="projects" spy={true} smooth={true} duration={500}>
                  <NavLink className="navlink" href="/">Projects</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500}>
                  <NavLink className="navlink" href="/">Contact</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink className="navlink" href="Resources/Amar_Rampersaud_Resume.pdf" download>
                  Resume
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MyNavbar;