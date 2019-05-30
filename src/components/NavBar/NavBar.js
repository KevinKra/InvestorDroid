import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <SearchBar />
      </nav>
    );
  }
}

export default NavBar;
