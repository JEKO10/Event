import { render, screen } from "@testing-library/react";
import News from "../../components/News";
import news from "../../news.json";
import { BrowserRouter as Router } from "react-router-dom";

describe("News component", () => {
  beforeEach(() => {
    render(
      <Router>
        <News />
      </Router>
    );
  });

  it("should render the news section", () => {
    const newsSection = screen.getByTestId("news-section");
    expect(newsSection).toBeInTheDocument();
  });

  it("should render news items", () => {
    const newsItems = screen.getAllByTestId("news-item");
    expect(newsItems.length).toBe(news.length);
  });

  it("should display news titles", () => {
    news.forEach((singleNew) => {
      const newsTitle = screen.getByText(singleNew.title);
      expect(newsTitle).toBeInTheDocument();
    });
  });

  it("should display news descriptions", () => {
    news.forEach((singleNew) => {
      const newsDescription = screen.getByText(singleNew.title);
      expect(newsDescription).toBeInTheDocument();
    });
  });
});
