import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

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
        <Navbar fixed="top" color="dark" dark expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/amar-rampersaud/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/amar-rampersaud/">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/amar-rampersaud/">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="src/components/Navbar/Amar_Rampersaud_Resume.pdf" download>
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