import { expect, test } from "@playwright/test";
import { projects } from "../src/data/ProjectData";

const firstProject = projects[0];

test.describe("portfolio critical user flows", () => {
  test("loads the home page and navigates through header links", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Yohan Awishka/);
    await expect(page.locator("#home").getByRole("heading", { name: /Yohan Awishka/i })).toBeVisible();
    await expect(page.locator('header a[href="/contact"]').first()).toHaveAttribute(
      "href",
      "/contact",
    );

    const nav = page.getByRole("navigation");
    await nav.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(
      page.getByRole("heading", { level: 1, name: /Yohan Awishka/i }),
    ).toBeVisible();
    await expect(nav.getByRole("link", { name: "About" })).toHaveClass(
      /text-brand-crimson-red/,
    );

    await nav.getByRole("link", { name: "Projects" }).click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(page.getByRole("heading", { name: /Featured Projects/i })).toBeVisible();
  });

  test("opens, closes, and navigates with the mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await page.getByRole("button", { name: /open menu/i }).click();
    await expect(page.getByRole("button", { name: /close menu/i })).toBeVisible();
    await expect(page.getByRole("link", { name: "Experience", exact: true })).toBeVisible();

    await page.getByRole("button", { name: /close menu/i }).click();
    await expect(page.getByRole("button", { name: /close menu/i })).not.toBeInViewport();

    await page.getByRole("button", { name: /open menu/i }).click();
    await page.locator('header a[href="/contact"]').last().click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("heading", { name: /Let's Work Together/i })).toBeVisible();
  });

  test("shows project listing, detail pages, and unknown project fallback", async ({ page }) => {
    await page.goto("/projects");

    await expect(page.getByRole("heading", { name: /Featured Projects/i })).toBeVisible();
    await expect(page.getByRole("link", { name: firstProject.title })).toHaveAttribute(
      "href",
      `/projects/${firstProject.slug}`,
    );

    await page.getByRole("link", { name: firstProject.title }).click();
    await expect(page).toHaveURL(new RegExp(`/projects/${firstProject.slug}$`));
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: new RegExp(firstProject.title.split(" - ")[0], "i"),
      }),
    ).toBeVisible();
    await expect(page.getByText(firstProject.category).first()).toBeVisible();

    await page.goto("/projects/not-a-real-project");
    await expect(page.getByRole("heading", { name: /Project Not Found/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Back to Projects/i })).toHaveAttribute(
      "href",
      "/projects",
    );
  });

  test("validates contact form states", async ({ page }) => {
    await page.goto("/contact");

    await page.getByRole("button", { name: /send message/i }).click();

    await expect(page.getByText("Name is required")).toBeVisible();
    await expect(page.getByText("Email is required")).toBeVisible();
    await expect(page.getByText("Subject is required")).toBeVisible();
    await expect(page.getByText("Message is required")).toBeVisible();

    await page.getByLabel(/your name/i).fill("Yohan");
    await page.getByLabel(/your email/i).fill("yohan@example.com");
    await page.getByLabel(/subject/i).fill("Portfolio project");
    await page.getByLabel(/your message/i).fill("I want to discuss a new website.");
    await page.getByRole("button", { name: /send message/i }).click();

    await expect(page.getByRole("button", { name: /sending/i })).toBeVisible();
    await expect(page.getByText(/Message Sent Successfully/i)).toBeVisible({
      timeout: 5_000,
    });
  });

  test("supports CTA and WhatsApp interactions", async ({ page }) => {
    await page.goto("/projects");

    await page.getByRole("link", { name: /Start a Project/i }).click();
    await expect(page).toHaveURL(/\/contact$/);

    await page.evaluate(() => {
      window.open = (url?: string | URL) => {
        window.localStorage.setItem("opened-url", String(url));
        return null;
      };
    });

    await page.getByRole("button", { name: /Chat on WhatsApp/i }).click();

    const openedUrl = await page.evaluate(() => window.localStorage.getItem("opened-url"));
    expect(openedUrl).toContain("https://wa.me/94781667268");
    expect(openedUrl).toContain("text=");
  });

  test("loads critical top-level routes", async ({ page }) => {
    const routes = [
      { path: "/", heading: /Yohan Awishka/i },
      { path: "/about", heading: /Yohan Awishka/i },
      { path: "/projects", heading: /Featured Projects/i },
      { path: "/experience", heading: /Experience/i },
      { path: "/contact", heading: /Let's Work Together/i },
    ];

    for (const route of routes) {
      await page.goto(route.path);
      await expect(page.getByRole("heading", { name: route.heading }).first()).toBeVisible();
    }
  });
});
