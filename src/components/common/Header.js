import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import LoadingDots from './LoadingDots';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({loading}) => {
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/">Home</IndexLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/about" activeClassName="active">
          <NavItem>About</NavItem>
        </LinkContainer>
        <LinkContainer to="/courses" activeClassName="active">
          <NavItem>Courses</NavItem>
        </LinkContainer>
        {loading && <LoadingDots interval={100} dots={20} />}
      </Nav>
    </Navbar>
  );
};

export default Header;
