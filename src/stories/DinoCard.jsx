import React from "react";
import { storiesOf } from "@storybook/react";
import DinoCard from "../components/organisms/DinoCard";

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

storiesOf("DinoCard", module).add(
  "default",
  <DinoCard item={singleDinoData} />
);
