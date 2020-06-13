import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
          <div>
            <Navbar fixed="top" bg="dark" variant="dark">
            <Nav className="nav navbar-nav ml-auto">
              <a href="#home">Home</a>
              <a href="#aboutMe">About</a>
              <a href="#skills">Skills</a>
              <a href="#resume">Resume</a>
            </Nav>
            </Navbar>
          </div>
    );
}

export default Header;

