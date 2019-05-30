import React, { Component } from "react";
import "./DataPointer.scss";
import { Link } from "react-router-dom";

class DataPointer extends Component {
  render() {
    const { name, desc } = this.props;
    return (
      <Link to={name}>
        <div className="DataPointer">
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </Link>
    );
  }
}

export default DataPointer;
