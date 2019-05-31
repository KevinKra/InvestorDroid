import React from "react";
import "./App.css";
import * as apiCalls from "../../utils/api/apiCalls";
import * as actions from "../../actions";
import { Route } from "react-router";
import News from "../../containers/News/News";
import DataSection from "../DataSection/DataSection";
import NavBar from "../NavBar/NavBar";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.getInfo();
  }

  getInfo = async () => {
    const mainCompanies = ["msft", "aapl", "twtr", "nflx"];
    mainCompanies.forEach(async ticker => {
      const companyData = await apiCalls.compileCompanyData(ticker);
      this.props.collectCompanyData(companyData);
    });
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
const mapStateToProps = state => ({
  newsReducers: state.newsReducers
});

const mapDispatchToProps = dispatch => ({
  collectNews: news => dispatch(actions.collectNews(news)),
  collectCompanyData: company => dispatch(actions.collectCompanyData(company))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
