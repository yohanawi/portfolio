import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WhatsAppButton } from "../WhatsAppButton";

describe("WhatsAppButton", () => {
  it("opens WhatsApp with the configured phone number and message", async () => {
    const user = userEvent.setup();
    const open = jest.spyOn(window, "open").mockImplementation();

    render(<WhatsAppButton />);

    await user.click(screen.getByRole("button", { name: /chat on whatsapp/i }));

    expect(open).toHaveBeenCalledWith(
      expect.stringContaining("https://wa.me/94781667268?text="),
      "_blank",
      "noopener,noreferrer",
    );

    open.mockRestore();
  });
});
