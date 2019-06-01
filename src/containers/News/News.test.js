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

  describe("componentDidMount", () => {
    it("should call getInfo on mount", () => {
      jest.spyOn(wrapper.instance(), "getNews");
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().getNews).toHaveBeenCalled();
    });
  });
});
