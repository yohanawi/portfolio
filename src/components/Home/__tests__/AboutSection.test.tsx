import { render, screen } from "@testing-library/react";
import AboutSection from "../AboutSection";

describe("Home AboutSection", () => {
  it("renders the profile summary, expertise tags, and CV link", () => {
    render(<AboutSection />);

    expect(screen.getByRole("heading", { name: /about me/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /full stack developer & designer/i })).toBeInTheDocument();
    expect(screen.getByText("UI/UX Design")).toBeInTheDocument();
    expect(screen.getByText("Frontend Dev")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /download cv/i })).toHaveAttribute(
      "href",
      "/cv/yohan-indrawansha-cv.pdf",
    );
    expect(screen.getByRole("img", { name: /yohan awishka/i })).toBeInTheDocument();
  });
});
