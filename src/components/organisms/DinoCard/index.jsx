import React from "react";
import { NavLink } from "react-router-dom";

const DinoCard = ({ dino }) => (
  <NavLink to={`/dino/${dino.name}`} className="dino">
    <img src={dino.image} alt={dino.name} />
    <h2>{dino.name}</h2>
    <p>{dino.diet}</p>
    <p>{dino.period}</p>
  </NavLink>
);

export default DinoCard;
