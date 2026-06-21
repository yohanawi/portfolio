import { render, screen } from "@testing-library/react";
import CompetenciesSection from "../CompetenciesSection";
import HeroSection from "../HeroSeCtion";
import SummarySection from "../SummarySection";

describe("About page sections", () => {
  it("renders the about hero with primary actions", () => {
    render(<HeroSection />);

    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /yohan awishka/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /download cv/i })).toHaveAttribute(
      "href",
      "/cv/yohan-cv.pdf",
    );
    expect(screen.getByRole("link", { name: /contact me/i })).toHaveAttribute("href", "#contact");
  });

  it("renders professional philosophy and skill snapshot content", () => {
    render(<SummarySection />);

    expect(screen.getByRole("heading", { name: /my professional philosophy/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /skills snapshot/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /profile/i })).toBeInTheDocument();
    expect(screen.getByText("Next.js, React")).toBeInTheDocument();
    expect(screen.getByText("Laravel, PHP")).toBeInTheDocument();
  });

  it("renders core competencies", () => {
    render(<CompetenciesSection />);

    expect(screen.getByRole("heading", { name: /what i do best/i })).toBeInTheDocument();
    expect(screen.getByText("SEO-Optimized Websites")).toBeInTheDocument();
    expect(screen.getByText("Scalable Applications")).toBeInTheDocument();
    expect(screen.getByText("Secure Systems")).toBeInTheDocument();
  });
});
