import React, { Component } from "react";
import SearchBar from "../../containers/SearchBar/SearchBar";
import "./NavBar.scss";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <SearchBar />
        <div className="main-title">
          <i className="fas fa-robot" />
          <h3>InvestorDroid</h3>
        </div>
      </nav>
    );
  }
}

export default NavBar;
