import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../ContactForm";

describe("ContactForm", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("shows validation errors when required fields are empty", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText("Name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Subject is required")).toBeInTheDocument();
    expect(screen.getByText("Message is required")).toBeInTheDocument();
  });

  it("validates email format", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/your name/i), "Yohan");
    await user.type(screen.getByLabelText(/your email/i), "not-an-email");
    await user.type(screen.getByLabelText(/subject/i), "Project");
    await user.type(screen.getByLabelText(/your message/i), "I want to build a site.");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText("Email is invalid")).toBeInTheDocument();
  });

  it("submits valid details and resets the form after the success state", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/your name/i), "Yohan");
    await user.type(screen.getByLabelText(/your email/i), "yohan@example.com");
    await user.type(screen.getByLabelText(/subject/i), "Website build");
    await user.type(screen.getByLabelText(/your message/i), "Please help me build a portfolio.");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(await screen.findByText(/message sent successfully/i)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(screen.getByLabelText(/your name/i)).toHaveValue("");
      expect(screen.getByRole("button", { name: /send message/i })).toBeEnabled();
    });
  });
});
