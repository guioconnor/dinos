import React from "react";

const DinoDetailsCard = ({
  dino: {
    name,
    image,
    pronunciation,
    meaningOfName,
    diet,
    length,
    period,
    mya,
    info
  }
}) => (
  <div className="App">
    <h1>
      Thomas and Marco's <br /> {name} page
    </h1>
    <img className="main" src={image} alt="dinosaurs" />
    <ul className="dino-data">
      {name && <li>name{name}</li>}
      {pronunciation && <li>pronunciation{pronunciation}</li>}
      {meaningOfName && <li>meaningOfName{meaningOfName}</li>}
      {diet && <li>diet{diet}</li>}
      {length && <li>length{length}</li>}
      {period && <li>period{period}</li>}
      {mya && <li>mya{mya}</li>}
      {info && <li>info{info}</li>}
    </ul>
  </div>
);

export default DinoDetailsCard;
