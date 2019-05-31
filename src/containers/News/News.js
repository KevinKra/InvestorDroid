import React, { Component } from "react";
import "./News.scss";
import { fetchIEXnews } from "../../utils/api/apiCalls";

class News extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const news = await fetchIEXnews();
    const { headline, image, summary, datetime, source, related } = news;
    const timeStamp = new Date(datetime * 1000).toString();
    const newsData = { headline, image, summary, timeStamp, source, related };
    this.setState({ news: newsData });
  };
  render() {
    const { headline, summary, timeStamp, source, related } = this.state.news;
    return (
      <article className="News">
        <section>
          <header>
            <h3>{headline}</h3>
            <p>Stock Ticker: {related}</p>
          </header>
          <div className="body">
            <p className="summary">{summary}</p>
            <p className="date">{timeStamp}</p>
            <p className="source">{source}</p>
          </div>
        </section>
      </article>
    );
  }
}

export default News;
