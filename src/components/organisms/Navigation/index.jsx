import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/dinos">
      Home
    </NavLink>
    <NavLink activeClassName="active" to={{ pathname: "/about" }}>
      About
    </NavLink>
    <NavLink activeClassName="active" to={{ pathname: "/contact" }}>
      Contact
    </NavLink>
  </nav>
);

export default Navigation;
