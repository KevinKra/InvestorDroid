import React, { Component } from "react";
import "./SearchBar.scss";

class SearchBar extends Component {
  render() {
    return (
      <form className="SearchBar">
        <input type="search" placeholder="Search..." />
      </form>
    );
  }
}

export default SearchBar;
