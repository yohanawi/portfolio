import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders brand details, social links, and the current year", () => {
    render(<Footer />);

    expect(screen.getByRole("heading", { name: /yohan awishka/i })).toBeInTheDocument();
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
    expect(screen.getByText(/Based in Sri Lanka/i)).toBeInTheDocument();
    expect(screen.getByText(/all rights reserved/i)).toHaveTextContent(
      new Date().getFullYear().toString(),
    );

    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/yohan-awishka-indrawansha/",
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/yohanawi",
    );
  });
});
