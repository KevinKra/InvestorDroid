import React from "react";
import { shallow } from "enzyme";
import News from "./News";

describe("<News />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<News />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
