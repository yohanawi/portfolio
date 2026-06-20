import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { experiences } from "@/data/ExperienceData";
import TimeLineSection from "../TimeLineSection";

describe("TimeLineSection", () => {
  it("shows the first experience details by default", () => {
    render(<TimeLineSection />);

    expect(screen.getByText(experiences[0].description)).toBeInTheDocument();
    expect(screen.getByText(experiences[0].responsibilities[0])).toBeInTheDocument();
  });

  it("switches the expanded card when another experience is opened", async () => {
    const user = userEvent.setup();

    render(<TimeLineSection />);

    const secondCard = screen
      .getByRole("heading", { name: experiences[1].title })
      .closest("article");

    expect(secondCard).not.toBeNull();

    await user.click(
      within(secondCard as HTMLElement).getByRole("button", { name: /show details/i }),
    );

    expect(screen.queryByText(experiences[0].description)).not.toBeInTheDocument();
    expect(screen.getByText(experiences[1].description)).toBeInTheDocument();
  });
});
