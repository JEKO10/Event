import { render, screen } from "@testing-library/react";
import SinglePageHeader from "../../components/SinglePageHeader";
import { BrowserRouter as Router } from "react-router-dom";

describe("SinglePageHeader component", () => {
  it("should render the title", () => {
    const content = { title: "Example Title", body: "Example Body" };

    render(
      <Router>
        <SinglePageHeader title={content.title} body={content.body} />
      </Router>
    );

    const titleElement = screen.getByRole("heading");

    expect(titleElement).toHaveTextContent("Example Title");
  });

  it("should render multiple paragraphs in the body", () => {
    const title = "Example Title";
    const body = ["Paragraph 1", "Paragraph 2"];

    render(
      <Router>
        <SinglePageHeader title={title} body={body} />
      </Router>
    );

    const paragraphs = screen.getAllByText(/Paragraph/i);

    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });
  });
});
