import React from "react";

export const playRoar = () => {
  const roarPlayer = document.getElementById("roarplayer");
  roarPlayer.play();
};

const Roar = () => (
  <audio className="player" preload id="roarplayer">
    <source src="https://raw.githubusercontent.com/guioconnor/dinos/master/src/components/atoms/Roar/TyrannosaurusRexRoar.mp3" />
  </audio>
);

export default Roar;
