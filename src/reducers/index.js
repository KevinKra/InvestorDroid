import { combineReducers } from "redux";

const newsReducers = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "COLLECT_NEWS":
      return payload.news;
    default:
      return state;
  }
};

const stockInformation = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "COMPANY_DATA":
      return [...state, payload.company];
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ newsReducers, stockInformation });
