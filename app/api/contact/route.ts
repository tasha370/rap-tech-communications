
import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid form submission." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, error: "Invalid form submission." },
        { status: 400 }
      );
    }

    const form = body as Record<string, unknown>;

    const firstName =
      typeof form.firstName === "string"
        ? form.firstName.trim()
        : "";

    const lastName =
      typeof form.lastName === "string"
        ? form.lastName.trim()
        : "";

    const email =
      typeof form.email === "string"
        ? form.email.trim()
        : "";

    const phone =
      typeof form.phone === "string"
        ? form.phone.trim()
        : "";

    const subject =
      typeof form.subject === "string"
        ? form.subject.trim()
        : "";

    const message =
      typeof form.message === "string"
        ? form.message.trim()
        : "";

    if (
      !firstName ||
      !lastName ||
      !email ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (
      firstName.length > 100 ||
      lastName.length > 100 ||
      email.length > 254 ||
      phone.length > 30 ||
      subject.length > 100 ||
      message.length > 500
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Some fields exceed their permitted length.",
        },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const allowedSubjects = [
      "Digital Literacy",
      "Community Connectivity",
      "Green Technology",
      "Membership",
      "Partnership",
      "General Enquiry",
    ];

    if (!allowedSubjects.includes(subject)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please select a valid enquiry subject.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Contact API configuration is incomplete.");

      return NextResponse.json(
        {
          success: false,
          error: "The email service is not configured correctly.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const fullName = `${firstName} ${lastName}`;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Website Enquiry: ${subject}`,
      text: [
        "New message from the Rap-Tech Communications website",
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend email error:", error.message);

      return NextResponse.json(
        {
          success: false,
          error:
            "Your message could not be sent. Please try again later.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
