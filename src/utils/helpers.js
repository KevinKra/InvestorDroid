const tickers = [
  "aapl",
  "dis",
  "msft",
  "siri",
  "grpn",
  "twtr",
  "tsla",
  "nflx",
  "spwr",
  "xom",
  "yuma",
  "lmt",
  "mro",
  "hal",
  "baba",
  "amzn",
  "t",
  "nvda"
];

export const randomTickerGenerator = () => {
  const length = tickers.length;
  const randomNumber = Math.floor(Math.random() * length);
  return tickers[randomNumber];
};
