import React from "react";

const Roar = ({ inputRef }) => (
  <audio className="player" preload id="roarplayer" ref={inputRef} >
    <source src="https://raw.githubusercontent.com/guioconnor/dinos/master/src/components/atoms/Roar/TyrannosaurusRexRoar.mp3" />
  </audio >
);

export default Roar;
