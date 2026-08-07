/**
 * @jest-environment node
 */
import { NextRequest } from "next/server";
import { POST } from "../route";

const sendMail = jest.fn().mockResolvedValue({ messageId: "test" });

jest.mock("nodemailer", () => ({
  __esModule: true,
  default: {
    createTransport: jest.fn(() => ({ sendMail })),
  },
}));

const ORIGINAL_ENV = process.env;

function makeRequest(body: unknown) {
  return new NextRequest("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...ORIGINAL_ENV,
      CONTACT_EMAIL_USER: "yohan.indrawansha2000@gmail.com",
      CONTACT_EMAIL_APP_PASSWORD: "test-app-password",
    };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  it("rejects submissions missing required fields", async () => {
    const response = await POST(makeRequest({ name: "", email: "", subject: "", message: "" }));
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.errors.name).toBe("Name is required");
    expect(data.errors.email).toBe("Email is required");
    expect(data.errors.subject).toBe("Subject is required");
    expect(data.errors.message).toBe("Message is required");
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("rejects an invalid email format", async () => {
    const response = await POST(
      makeRequest({ name: "Jane", email: "not-an-email", subject: "Hi", message: "Hello there" }),
    );
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.errors.email).toBe("Email is invalid");
  });

  it("silently accepts honeypot-triggered submissions without sending mail", async () => {
    const response = await POST(
      makeRequest({
        name: "Bot",
        email: "bot@example.com",
        subject: "spam",
        message: "spam",
        company: "filled-in-by-a-bot",
      }),
    );
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("sends mail for a valid submission", async () => {
    const response = await POST(
      makeRequest({
        name: "Jane Doe",
        email: "jane@example.com",
        subject: "Project inquiry",
        message: "I'd like to build a website.",
      }),
    );
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(sendMail).toHaveBeenCalledTimes(1);
    expect(sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "yohan.indrawansha2000@gmail.com",
        replyTo: "jane@example.com",
        subject: "[Portfolio Contact] Project inquiry",
      }),
    );
  });

  it("returns 500 when email credentials are not configured", async () => {
    delete process.env.CONTACT_EMAIL_APP_PASSWORD;

    const response = await POST(
      makeRequest({ name: "Jane", email: "jane@example.com", subject: "Hi", message: "Hello there" }),
    );

    expect(response.status).toBe(500);
    expect(sendMail).not.toHaveBeenCalled();
  });
});
