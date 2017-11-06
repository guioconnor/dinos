import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
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
      Dinos
    </NavLink>
    <NavLink exact activeClassName="active" to="/animals">
      Animals
    </NavLink>
    <NavLink activeClassName="active" to={{ pathname: "/dinos/memory" }}>
      Dino MG
    </NavLink>
    <NavLink activeClassName="active" to={{ pathname: "/animals/memory" }}>
      Animals MG
    </NavLink>
    <NavLink activeClassName="active" to={{ pathname: "/birds/memory" }}>
      Birds MG
    </NavLink>
  </Nav>
);

export default Navigation;
