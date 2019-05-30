import { API_KEY_AA, API_KEY_IEX } from "./apikey";

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
