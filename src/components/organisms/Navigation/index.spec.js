import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Navigation from "./index";

describe("<Navigation />", () => {
  const wrapper = shallow(<Navigation dinoData={[]} />);

  it("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
