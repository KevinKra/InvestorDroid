//import and make mock data
import * as apiCalls from "./apiCalls";
import { API_KEY_AA, API_KEY_IEX } from "./apikey";

const mockCompanyData = {
  symbol: "TWTR",
  companyName: "Twitter, Inc.",
  exchange: "New York Stock Exchange",
  industry: "Internet Software/Services",
  website: "http://www.twitter.com",
  description:
    "Twitter, Inc. is a global platform for public self-expression and conversation in real time. It provides a network that connects users to people, information, ideas, ons, and news. The company's services include live commentary, live connections and live conversations. Its application provides social networking services and micro-blogging services through mobile devices and the Internet. The company can also be used as a marketing tool for businesses. Twitter was founded by Jack Dorsey, Christopher Isaac Stone, Noah E. Glass, Jeremy LaTrasse, and Evan Williams on March 21, 2006 and is headquartered in San Francisco, CA.",
  CEO: "Jack Dorsey",
  securityName: "Twitter, Inc.",
  issueType: "cs",
  sector: "Technology Services",
  employees: 3920
};

const mockNews = {
  headline: "25 fishing gifts to fuel Dad's favorite hobby this Father's Day",
  image:
    "https://cloud.iexapis.com/v1/news/image/2cc2d89f-b886-448d-af37-c065e8d203df",
  related: "AMZN",
  source: "Business Insider",
  summary:
    "Insider Picks writes about products and services to help you navigate when shopping online. Insider Inc. receives a commission from our affiliate partners when you buy through our links, but our reporting and recommendations are always independent and objective. If Dad's a fisherman, Father's Day could be a whole lot easier than you've ever realized. Fishing isn't a cheap hobby, and there's always something he needs for the tackle box or the boat. From rods and reels to pliers and coolers, there's surely something of which he's in dire need below. Check out all of our Father's Day gift ideas for 2019 for more inspiration. If Dad fancies himself a fisherman, chances are good that he's got one expensive hobby. But this makes your chore of finding him the perfect Father's Day gift a breeze. You see, fishing, seemingly, requires more and more gadgets and apparel each year. Who knew he needed a wireless, castable fish camera ? (He doesn't.) There's an endless list of things that need replacing, updating, fixing, or scrapping.",
  timeStamp: "Mon May 19 51383 10:00:00 GMT-0600 (Mountain Daylight Time)"
};

const mockTicker = `twtr`;
export const mockResponse = {
  ok: true
};

describe("apiCalls", () => {
  describe("companyData", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCompanyData)
        })
      );
    });
    it("should call fetch with the correct params", async () => {
      await apiCalls.companyData(mockTicker);
      expect(window.fetch).toHaveBeenCalledWith(
        `https://cloud.iexapis.com/stable/stock/${mockTicker}/company?token=${API_KEY_IEX}`
      );
    });
    it("should returned a parsed object of the response when successful", async () => {
      const response = await apiCalls.companyData(mockTicker);
      expect(response).toEqual(mockCompanyData);
    });
    it("should throw an error on fail", async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: false
        })
      );
      await expect(apiCalls.companyData()).rejects.toEqual(
        Error("Unable to fetch IEX company news.")
      );
    });
  });
  describe("fetchIEXnews", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockNews)
        })
      );
    });
    it("should call fetch with the correct params", async () => {
      await apiCalls.fetchIEXnews();
      expect(window.fetch).toHaveBeenCalledWith(
        `https://cloud.iexapis.com/stable/stock/"amzn"/news/last/5?token=${API_KEY_IEX}`
      );
    });
    it("should return a parsed object if successful", async () => {});
    it("should throw an error on fail", async () => {});
    it("should filter out articles that have a summary of 'No summary available'", () => {});
    it("should return the first article if there are no articles with a valid summary", () => {});
    it("should return the first summary if there is 1 or more summaries returned in the array by the filter", () => {});
  });
});
