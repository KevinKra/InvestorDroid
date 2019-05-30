import React from "react";
import "./App.css";
import * as apiCalls from "../../utils/api/apiCalls";
import { Route } from "react-router";
import News from "../../containers/News/News";
import DataSection from "../DataSection/DataSection";
import NavBar from "../NavBar/NavBar";

class App extends React.Component {
  componentDidMount() {
    this.getExistInfo();
  }

  getExistInfo = async () => {
    const AAdata = await apiCalls.fetchAllData();
    const IEXdata = await apiCalls.fetchIEX();
    const IEXnews = await apiCalls.fetchIEXnews();
    console.log("alphaAdvantage:", AAdata);
    console.log("IEXdata:", IEXdata);
    console.log("IEXnews:", IEXnews);
  };
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={News} />
        <Route path="/:sector" component={News} />
        <Route path="/" component={DataSection} />
      </div>
    );
  }
}

export default App;
