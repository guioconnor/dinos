import React from "react";
import { storiesOf } from "@storybook/react";
import DinoGrid from "../components/organisms/DinoGrid";

const dinoData = [
  {
    // image: Silhouettes.allosaurus,
    name: "Allosaurus",
    pronunciation: "AL-oh-sore-us",
    meaningOfName: "other lizard",
    diet: "carnivorous",
    length: "12m",
    period: "Late Jurassic",
    mya: "156-144",
    info:
      "Allosaurus was an apex predator in the Late Jurassic in North America."
  },
  {
    // "image": apatosaurus,
    name: "Apatosaurus",
    pronunciation: "ah-PAT-oh-sore-us",
    meaningOfName: "deceptive lizard",
    diet: "herbivorous",
    length: "21m",
    period: "Late Jurassic",
    mya: "154-145",
    info:
      "Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909."
  }
];

storiesOf("DinoGrid", module).add("default", () => (
  <DinoGrid dinoData={dinoData} mainIllustration="stub" />
));
