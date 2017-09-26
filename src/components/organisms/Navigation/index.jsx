import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  & a {
    display: inline-block;
    margin: 0 10px;
    padding: 5px;
    border-radius: 3px;
    text-decoration: none;
  }

  & a.active,
  & a:hover {
    background: #bbe;
  }
`;

const Navigation = () => (
  <Nav>
    <NavLink exact activeClassName="active" to="/dinos">
      Home
    </NavLink>
    <NavLink activeClassName="active" to={{ pathname: "/about" }}>
      About
    </NavLink>
    <NavLink activeClassName="active" to={{ pathname: "/contact" }}>
      Contact
    </NavLink>
  </Nav>
);

export default Navigation;
