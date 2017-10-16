import React from "react";
import tyrannosaurusRexRoar from './TyrannosaurusRexRoar.mp3';

const Roar = ({ inputRef }) => (
  <audio className="player" preload id="roarplayer" ref={inputRef} >
    <source src={tyrannosaurusRexRoar} />
  </audio >
);

export default Roar;
