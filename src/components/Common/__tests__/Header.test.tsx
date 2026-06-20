import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { usePathname } from "next/navigation";
import Header from "../Header";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockedUsePathname = usePathname as jest.Mock;

describe("Header", () => {
  beforeEach(() => {
    mockedUsePathname.mockReturnValue("/projects");
  });

  it("renders primary navigation links with the current route highlighted", () => {
    render(<Header />);

    expect(screen.getAllByRole("link", { name: "Projects" })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: "Projects" })[0]).toHaveClass(
      "text-brand-crimson-red",
    );
    expect(screen.getAllByRole("link", { name: "About" })[0]).toHaveAttribute(
      "href",
      "/about",
    );
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();

    render(<Header />);

    await user.click(screen.getByRole("button", { name: /open menu/i }));
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /close menu/i }));
    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });
});
