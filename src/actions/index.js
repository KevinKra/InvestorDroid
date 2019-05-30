export const collectNews = news => {
  return {
    type: "COLLECT_NEWS",
    payload: { news }
  };
};
