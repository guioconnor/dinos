import React from "react";
import { NavLink } from "react-router-dom";

const DinoCard = ({ dino }) => (
  <NavLink to={`/dino/${dino.name}`} className="dino">
    <img src={dino.image} alt={dino.name} />
    <h2>{dino.name}</h2>
  </NavLink>
);

export default DinoCard;
