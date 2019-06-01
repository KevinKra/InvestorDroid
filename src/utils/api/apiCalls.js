import { API_KEY_AA, API_KEY_IEX } from "./apikey";
import { randomTickerGenerator } from "../helpers";

export const fetchIEXnews = async () => {
  const ticker = randomTickerGenerator();
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
  return hasSummary[0];
};

export const companyData = async ticker => {
  const response = await fetch(
    `https://cloud.iexapis.com/stable/stock/${ticker}/company?token=${API_KEY_IEX}`
  );
  if (!response.ok) {
    throw new Error("Unable to fetch IEX company news.");
  }
  return await response.json();
};

const companyBalanceSheet = async ticker => {
  const response = await fetch(
    `https://cloud.iexapis.com/stable/stock/${ticker}/balance-sheet?token=${API_KEY_IEX}`
  );
  if (!response.ok) throw new Error("Unable to fetch IEX balance sheet.");
  const parsed = await response.json();
  return parsed.balancesheet[0];
};

const companyKeyStats = async ticker => {
  console.log("hello");
  const response = await fetch(
    `https://cloud.iexapis.com/stable/stock/${ticker}/stats?token=${API_KEY_IEX}`
  );
  if (!response.ok) throw new Error("Unable to fetch IEX key stats.");
  return await response.json();
};

const companyWeeklyStocks = async ticker => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&interval=5min&apikey=${API_KEY_AA}`
  );
  if (!response.ok) throw new Error("Unable to fetch AA daily stocks");
  const filterData = async () => {
    const parsed = await response.json();
    console.log("parsed", parsed);
    const timeSeries = parsed["Time Series (Daily)"];
    const last7days = Object.keys(timeSeries).slice(0, 7);
    const filtered = last7days.map(day => {
      return { day, ...timeSeries[day] };
    });
    return filtered;
  };
  return filterData();
};

export const compileCompanyData = async ticker => {
  const response = Promise.all([
    companyData(ticker),
    companyBalanceSheet(ticker),
    companyKeyStats(ticker),
    companyWeeklyStocks(ticker)
  ]);
  const data = await response;
  return {
    ticker,
    generalData: data[0],
    balanceSheet: data[1],
    keyStats: data[2],
    weeklyStocks: data[3]
  };
};
