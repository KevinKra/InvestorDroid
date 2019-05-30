import { API_KEY_AA, API_KEY_IEX } from "./apikey";
import { randomTickerGenerator } from "../helpers";

export const fetchAllData = async () => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=${API_KEY_AA}`
  );
  if (!response.ok) {
    throw new Error("Unable to fetch data currently.");
  }
  return await response.json();
};

export const fetchIEX = async () => {
  const response = await fetch(
    `https://cloud.iexapis.com/stable/tops?token=${API_KEY_IEX}&symbols=aapl`
  );
  if (!response.ok) {
    throw new Error("Unable to fetch from IEX API");
  }
  return await response.json();
};

const ticker = randomTickerGenerator();
export const fetchIEXnews = async () => {
  console.log("ticker: ", ticker);
  const response = await fetch(
    `https://cloud.iexapis.com/stable/stock/${ticker}/news/last/5?token=${API_KEY_IEX}`
  );
  if (!response.ok) {
    throw new Error("Unable to fetch IEX stock news");
  }
  const articles = await response.json();
  const hasSummary = articles.filter(article => {
    return article.summary !== "No summary available.";
  });
  if (!hasSummary[0]) return articles[0];
  // console.log(hasSummary[0].summary);
  return hasSummary[0];
};
