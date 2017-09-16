import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import DinoGrid from "./index";

const data = [
  {
    image: "Silhouettes.allosaurus",
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

describe("<DinoGrid />", () => {
  describe("With an empty data set", () => {
    const wrapper = shallow(<DinoGrid dinoData={[]} />);

    it("should render an empty grid", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("With a non-empty data set", () => {
    const wrapper = shallow(<DinoGrid dinoData={data} />);

    it("should render a grid with dino cards", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
