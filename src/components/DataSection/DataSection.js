import React, { Component } from "react";
import "./DataSection.scss";
import DataPointer from "../DataPointer/DataPointer";

class DataSection extends Component {
  render() {
    return (
      <div className="DataSection">
        <DataPointer name="technology" desc="Stay up to date with the hottest tech stocks on the market."/>
        <DataPointer name="Auto" desc="Stay up to date with the hottest tech stocks on the market."/>
        <DataPointer name="Agriculture" desc="Stay up to date with the hottest tech stocks on the market."/>
        <DataPointer name="Oil and Gas" desc="Stay up to date with the hottest tech stocks on the market."/>
        <DataPointer name="Finance" desc="Stay up to date with the hottest tech stocks on the market."/>
        <DataPointer name="Health" desc="Stay up to date with the hottest tech stocks on the market."/>
      </div>
    );
  }
}

export default DataSection;
