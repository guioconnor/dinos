import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import DinoDetailsCard from "./index";

const data = {
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

describe("<DinoDetailsCard />", () => {
  describe("With an empty data set", () => {
    const wrapper = shallow(<DinoDetailsCard dino={data} />);

    it("should render an empty grid", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
