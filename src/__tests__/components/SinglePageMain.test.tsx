import { render, screen } from "@testing-library/react";
import SinglePageMain from "../../components/SinglePageMain";

describe("tests for SinglePageMain component", () => {
  const body = "<p>This is the main content.</p>";

  it("should render the SinglePageMain component with body content", () => {
    render(<SinglePageMain body={body} />);

    const bodyElement = screen.getByText("This is the main content.");
    expect(bodyElement).toBeInTheDocument();
  });
});
