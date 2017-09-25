import React from "react";

const DietFilter = ({ setFilter }) => (
  <ul>
    <li>
      <button type="button" onClick={() => setFilter()}>
        All
      </button>
    </li>
    <li>
      <button type="button" onClick={() => setFilter("Carnivores")}>
        Carnivores
      </button>
    </li>
    <li>
      <button type="button" onClick={() => setFilter("Herbivores")}>
        Herbivores
      </button>
    </li>
    <li>
      <button type="button" onClick={() => setFilter("Omnivores")}>
        Omnivores
      </button>
    </li>
  </ul>
);

export default DietFilter;
