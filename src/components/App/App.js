import React from "react";
import "./App.css";
import * as apiCalls from "../../utils/api/apiCalls";
import { Route } from "react-router";
import SearchBar from "../../containers/SearchBar/SearchBar";
import News from "../../containers/News/News";
import DataSection from "../DataSection/DataSection";

class App extends React.Component {
  componentDidMount() {
    this.getExistInfo();
  }

  getExistInfo = async () => {
    const AAdata = await apiCalls.fetchAllData();
    const IEXdata = await apiCalls.fetchIEX();
    console.log("alphaAdvantage:", AAdata);
    console.log("IEX:", IEXdata);
  };
  render() {
    return (
      <div className="App">
        <Route path="/" component={SearchBar} />
        <Route exact path="/" component={News} />
        <Route path="/" component={DataSection} />
      </div>
    );
  }
}

export default App;
