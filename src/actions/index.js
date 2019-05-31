export const collectNews = news => {
  return {
    type: "COLLECT_NEWS",
    payload: { news }
  };
};

export const collectCompanyData = company => {
  return {
    type: "COMPANY_DATA",
    payload: { company }
  };
};
