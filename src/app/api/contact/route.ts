import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // honeypot field - real users never fill this in
};

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
};

function validate(payload: Partial<ContactPayload>) {
  const errors: Record<string, string> = {};

  if (!payload.name?.trim()) errors.name = "Name is required";
  else if (payload.name.length > MAX_LENGTHS.name) errors.name = "Name is too long";

  if (!payload.email?.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.email = "Email is invalid";
  else if (payload.email.length > MAX_LENGTHS.email) errors.email = "Email is too long";

  if (!payload.subject?.trim()) errors.subject = "Subject is required";
  else if (payload.subject.length > MAX_LENGTHS.subject) errors.subject = "Subject is too long";

  if (!payload.message?.trim()) errors.message = "Message is required";
  else if (payload.message.length > MAX_LENGTHS.message) errors.message = "Message is too long";

  return errors;
}

export async function POST(request: NextRequest) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: bots fill every field, real users never see/fill this one
  if (body.company) {
    return NextResponse.json({ success: true });
  }

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const user = process.env.CONTACT_EMAIL_USER;
  const appPassword = process.env.CONTACT_EMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_EMAIL_TO || user;

  if (!user || !appPassword) {
    console.error("Contact form: CONTACT_EMAIL_USER / CONTACT_EMAIL_APP_PASSWORD are not configured");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  const { name, email, subject, message } = body as ContactPayload;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass: appPassword },
    });

    await transporter.sendMail({
      from: `"${name} (via yohanawishka.com)" <${user}>`,
      to,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed to send:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 502 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
