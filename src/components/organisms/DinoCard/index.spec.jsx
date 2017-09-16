import React from "react";
import { shallow } from "enzyme";
import DinoCard from "./index";
import toJson from "enzyme-to-json";

const data = {
  name: "Dino name",
  image: "abelisaurus"
};

describe("<DinoCard />", () => {
  describe("default", () => {});
  const wrapper = shallow(<DinoCard dino={data} />);

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
