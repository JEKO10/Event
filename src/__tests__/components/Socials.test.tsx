import { render, screen } from "@testing-library/react";
import Socials from "../../components/Socials";

beforeEach(() => {
  render(<Socials />);
});

describe("tests for socials component", () => {
  test("should render SocialsContainer section", () => {
    const socialsContainer = screen.getByRole("article");

    expect(socialsContainer).toBeInTheDocument();
  });

  test("should render the logo", () => {
    const logo = screen.getByAltText("Logo");

    expect(logo).toBeInTheDocument();
  });

  test("should render the twitter link", () => {
    const twitterLink = screen.getByRole("link", { name: /twitter/i });

    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute(
      "href",
      "https://twitter.com/OpstinaBerane"
    );
  });

  test("should render the facebook link", () => {
    const facebookLink = screen.getByRole("link", { name: /facebook/i });

    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/OpstinaBerane/?locale=sr_RS"
    );
  });

  test("should render the instagram link", () => {
    const instagramLink = screen.getByRole("link", { name: /instagram/i });

    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/opstinaberane/"
    );
  });

  test("should render the website link", () => {
    const websiteLink = screen.getByRole("link", { name: /website/i });

    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink).toHaveAttribute("href", "https://berane.me/");
  });
});
