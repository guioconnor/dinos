import React from "react";
import { storiesOf } from "@storybook/react";
import DinoDetailsCard from "../components/organisms/DinoDetailsCard";

const singleDinoData = {
  name: "name",
  image: "image",
  pronunciation: "pronunciation",
  meaningOfName: "meaningOfName",
  diet: "diet",
  length: "length",
  period: "period",
  mya: "mya",
  info: "info"
};

storiesOf("DinoDetailsCard", module).add("default", () => (
  <DinoDetailsCard dino={singleDinoData} />
));
