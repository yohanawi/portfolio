import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { projects } from "@/data/ProjectData";
import ProjectSection from "../ProjectSection";

describe("ProjectSection", () => {
  it("renders project cards with detail and demo links", () => {
    render(<ProjectSection />);

    const firstProject = projects[0];

    expect(screen.getByRole("link", { name: firstProject.title })).toHaveAttribute(
      "href",
      `/projects/${firstProject.slug}`,
    );
    expect(screen.getAllByRole("link", { name: /live demo/i })[0]).toHaveAttribute(
      "href",
      firstProject.links.demo,
    );
    expect(screen.getAllByText(firstProject.techStack[0]).length).toBeGreaterThan(0);
    expect(screen.getAllByText(firstProject.features[0]).length).toBeGreaterThan(0);
  });

  it("filters projects by search term and shows an empty state", async () => {
    const user = userEvent.setup();

    render(<ProjectSection />);

    await user.type(screen.getByPlaceholderText(/search projects/i), "not-a-real-project");

    expect(screen.getByRole("heading", { name: /no projects found/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: projects[0].title })).not.toBeInTheDocument();
  });

  it("switches between grid and list views", async () => {
    const user = userEvent.setup();

    render(<ProjectSection />);

    const viewButtons = screen.getAllByRole("button");
    await user.click(viewButtons[1]);

    const firstCard = screen.getAllByRole("article")[0];
    expect(firstCard).toHaveClass("flex");
    expect(firstCard).toHaveClass("gap-6");

    expect(within(firstCard).queryByText("Key Features")).not.toBeInTheDocument();
  });
});
