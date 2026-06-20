import { render, screen } from "@testing-library/react";
import { projects } from "@/data/ProjectData";
import SingleProjectsPage, {
  generateMetadata,
  generateStaticParams,
} from "../page";

describe("single project page", () => {
  it("generates a static route for each project slug", async () => {
    await expect(generateStaticParams()).resolves.toEqual(
      projects.map((project) => ({ singleproject: project.slug })),
    );
  });

  it("generates metadata for an existing project", async () => {
    const project = projects[0];

    const metadata = await generateMetadata({
      params: Promise.resolve({ singleproject: project.slug }),
    });

    expect(metadata.title).toBe(`${project.title} | Yohan Awishka Portfolio`);
    expect(metadata.description).toBe(project.description);
    expect(metadata.alternates?.canonical).toBe(
      `https://yohanawishka.com/projects/${project.slug}`,
    );
  });

  it("generates fallback metadata for an unknown project", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ singleproject: "unknown-project" }),
    });

    expect(metadata.title).toBe("Project Not Found | Yohan Awishka Portfolio");
  });

  it("renders the project detail page for a valid slug", async () => {
    const project = projects[0];
    const ui = await SingleProjectsPage({
      params: Promise.resolve({ singleproject: project.slug }),
    });

    render(ui);

    expect(
      screen.getByRole("heading", { level: 1, name: /InteriorFilm/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(screen.getAllByText(project.category).length).toBeGreaterThan(0);
  });

  it("renders a not-found state for an unknown slug", async () => {
    const ui = await SingleProjectsPage({
      params: Promise.resolve({ singleproject: "unknown-project" }),
    });

    render(ui);

    expect(screen.getByRole("heading", { name: /project not found/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to projects/i })).toHaveAttribute(
      "href",
      "/projects",
    );
  });
});
