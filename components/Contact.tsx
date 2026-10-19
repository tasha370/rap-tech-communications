
"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: String(formData.get("firstName") || "").trim(),
      lastName: String(formData.get("lastName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    if (!data.firstName || !data.lastName || !data.email ||
        !data.subject || !data.message) {
      setStatus("Please complete all required fields.");
      return;
    }

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Your message could not be sent. Please try again."
        );
      }

      setStatus("Thank you! Your message has been sent successfully.");
      form.reset();
      setMessage("");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="rt-contact" id="contact">
      <div className="rt-contact-header">
        <span className="rt-contact-label">GET IN TOUCH</span>

        <h2>
          Let's Build Something
          <span> Extraordinary Together.</span>
        </h2>

        <p>
          Have an idea, a question, or a project that can make
          a difference? We would love to hear from you. Connect
          with Rap-Tech Communications and let's create a more
          digitally empowered community together.
        </p>
      </div>

      <div className="rt-contact-container">
        <div className="rt-contact-info">
          <span className="rt-contact-label">CONTACT RAP-TECH</span>

          <h3>Let's Start a Conversation</h3>

          <p className="rt-contact-description">
            Whether you want to learn digital skills, collaborate
            with us, or support community innovation, our team
            welcomes your enquiry.
          </p>

          <div className="rt-contact-detail">
            <div className="rt-contact-icon">
              <MapPin size={21} />
            </div>
            <div>
              <h4>Our Location</h4>
              <p>West Nile, Uganda</p>
            </div>
          </div>

          <div className="rt-contact-detail">
            <div className="rt-contact-icon">
              <Mail size={21} />
            </div>
            <div>
              <h4>Email Address</h4>
              <p>raptechcommunications@gmail.com</p>
            </div>
          </div>

          <div className="rt-contact-detail">
            <div className="rt-contact-icon">
              <Phone size={21} />
            </div>
            <div>
              <h4>Phone / WhatsApp</h4>
              <p>+256791906404</p>
            </div>
          </div>

          <div className="rt-contact-message">
            <MessageCircle size={25} />
            <div>
              <h4>Have an idea?</h4>
              <p>
                Let's work together to bring technology and
                digital opportunities closer to our communities.
              </p>
            </div>
          </div>
        </div>

        <div className="rt-contact-form-card">
          <h3>Send Us a Message</h3>

          <p className="rt-contact-form-intro">
            Complete the form below to tell us how we can help.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="rt-contact-form-row">
              <label>
                First Name *
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  autoComplete="given-name"
                  required
                />
              </label>

              <label>
                Last Name *
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  autoComplete="family-name"
                  required
                />
              </label>
            </div>

            <div className="rt-contact-form-row">
              <label>
                Email Address *
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="+256..."
                  autoComplete="tel"
                />
              </label>
            </div>

            <label>
              Subject *
              <select name="subject" defaultValue="" required>
                <option value="" disabled>
                  Select your enquiry
                </option>
                <option value="Digital Literacy">Digital Literacy</option>
                <option value="Community Connectivity">
                  Community Connectivity
                </option>
                <option value="Green Technology">Green Technology</option>
                <option value="Membership">Membership</option>
                <option value="Partnership">Partnership</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
            </label>

            <label>
              Your Message *
              <textarea
                name="message"
                rows={5}
                maxLength={500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                required
              />
              <span className="rt-contact-counter">
                {message.length}/500 characters
              </span>
            </label>

            {status && (
              <p role="status" aria-live="polite">
                {status}
              </p>
            )}

            <button
              type="submit"
              className="rt-contact-submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
