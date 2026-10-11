
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Email delivery will be connected after the design is complete.
    alert(
      "Thank you for contacting Rap-Tech Communications! Email delivery will be configured soon."
    );
  }

  return (
    <section className="rt-contact" id="contact">
      {/* CONTACT INTRODUCTION */}
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

      {/* CONTACT DETAILS AND FORM */}
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
              <p>info@raptech.org</p>
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

        {/* MESSAGE FORM */}
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
                  required
                />
              </label>

              <label>
                Last Name *
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
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
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="+256..."
                />
              </label>
            </div>

            <label>
              Subject *
              <select name="subject" defaultValue="" required>
                <option value="" disabled>
                  Select your enquiry
                </option>
                <option value="Digital Literacy">
                  Digital Literacy
                </option>
                <option value="Community Connectivity">
                  Community Connectivity
                </option>
                <option value="Green Technology">
                  Green Technology
                </option>
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

            <button type="submit" className="rt-contact-submit">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
