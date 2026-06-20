import { experiences } from "../ExperienceData";

describe("ExperienceData", () => {
  it("uses unique ids for timeline anchors", () => {
    const ids = experiences.map((experience) => experience.id);

    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.every((id) => /^[a-z0-9-]+$/.test(id))).toBe(true);
  });

  it("contains enough detail for expanded timeline cards", () => {
    experiences.forEach((experience) => {
      expect(experience.title).toEqual(expect.any(String));
      expect(experience.company).toEqual(expect.any(String));
      expect(experience.duration).toEqual(expect.any(String));
      expect(experience.description.length).toBeGreaterThan(50);
      expect(experience.responsibilities.length).toBeGreaterThan(0);
      expect(experience.technologies?.length).toBeGreaterThan(0);
    });
  });
});
