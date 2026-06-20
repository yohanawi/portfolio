import { projects } from "../ProjectData";

describe("ProjectData", () => {
  it("uses unique, URL-safe slugs for every project", () => {
    const slugs = projects.map((project) => project.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs).toEqual(slugs.map((slug) => slug.toLowerCase()));
    expect(slugs.every((slug) => /^[a-z0-9-]+$/.test(slug))).toBe(true);
  });

  it("provides the fields needed to render project cards and detail pages", () => {
    projects.forEach((project) => {
      expect(project.title).toEqual(expect.any(String));
      expect(project.description.length).toBeGreaterThan(40);
      expect(project.techStack.length).toBeGreaterThan(0);
      expect(project.features.length).toBeGreaterThan(0);
      expect(project.role).toEqual(expect.any(String));
      expect(project.category).toEqual(expect.any(String));
      expect(project.links).toEqual(
        expect.objectContaining({
          demo: expect.any(String),
          githubFrontend: expect.any(String),
          githubBackend: expect.any(String),
        }),
      );
    });
  });
});
