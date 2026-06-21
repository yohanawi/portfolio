import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScrollTop from "../ScrollTop";

describe("ScrollTop", () => {
  beforeEach(() => {
    Object.defineProperty(window, "pageYOffset", {
      configurable: true,
      writable: true,
      value: 0,
    });
    jest.clearAllMocks();
  });

  it("appears after scrolling and returns the user to the top", async () => {
    const user = userEvent.setup();

    render(<ScrollTop />);

    expect(screen.queryByRole("button", { name: /scroll to top/i })).not.toBeInTheDocument();

    window.pageYOffset = 301;
    fireEvent.scroll(window);

    const button = screen.getByRole("button", { name: /scroll to top/i });
    expect(button).toBeInTheDocument();

    await user.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
