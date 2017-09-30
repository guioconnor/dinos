import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  padding: 10px;
  background: #122;

  & a {
    display: inline-block;
    margin: 0 10px;
    padding: 10px;
    border-radius: 3px;
    text-decoration: none;
    color: #cde;
    transition: 0.3s background;
  }

  & a.active,
  & a:hover {
    background: #567;
  }
`;

const Navigation = () => (
  <Nav>
    <NavLink exact activeClassName="active" to="/dinos">
      Home
    </NavLink>
    <NavLink activeClassName="active" to={{ pathname: "/dinos/memory" }}>
      Memory game
    </NavLink>
  </Nav>
);

export default Navigation;
