import { useState } from "react";
import emailjs from "@emailjs/browser";
import Icon from "./Icon.jsx";

/* Replace these with your EmailJS details */
const EMAILJS_SERVICE_ID = "service_52tmvvl";
const EMAILJS_TEMPLATE_ID = "template_r6e51xo";
const EMAILJS_PUBLIC_KEY = "RCJBpO-QNGxIdLx4T";

export const social = {
  email: "sandeepsahni2501@gmail.com"
};

const empty = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [note, setNote] = useState({
    done: false,
    text: ""
  });
  const [sending, setSending] = useState(false);

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      setNote({
        done: false,
        text: "Please fill all required fields correctly."
      });

      e.target.reportValidity();
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        },
        EMAILJS_PUBLIC_KEY
      );

      setNote({
        done: true,
        text: "Message sent successfully! I'll get back to you soon."
      });

      setForm(empty);

    } catch (error) {
      console.error("EmailJS Error:", error);

      setNote({
        done: false,
        text: "Something went wrong. Please try again."
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">

        <div className="sec-head reveal">
          <h2 className="sec-title">
            Let's build something together
          </h2>

          <p className="sec-sub">
            I'm open to opportunities, collaborations and interesting
            web development projects.
          </p>
        </div>

        <div className="contact-grid">

          {/* Contact Information */}
          <div className="reveal">

            <ul className="info-list">

              <li>
                <a
                  className="info"
                  href="tel:+918239657685"
                >
                  <Icon name="phone" size="ic-lg" />

                  <span>
                    <small>Phone</small>
                    <b>823-965-7685</b>
                  </span>
                </a>
              </li>

              <li>
                <a
                  className="info"
                  href={`mailto:${social.email}`}
                >
                  <Icon name="mail" size="ic-lg" />

                  <span>
                    <small>Email</small>
                    <b>{social.email}</b>
                  </span>
                </a>
              </li>

              <li>
                <div className="info">
                  <Icon name="pin" size="ic-lg" />

                  <span>
                    <small>Location</small>
                    <b>Hamirgarh, Bhilwara, Rajasthan</b>
                  </span>
                </div>
              </li>

            </ul>

          </div>

          {/* Contact Form */}
          <form
            className="form reveal d2"
            noValidate
            onSubmit={onSubmit}
          >

            <div className="f2">

              <div className="field">
                <label htmlFor="cf-name">
                  Name
                </label>

                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={update}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="field">
                <label htmlFor="cf-email">
                  Email
                </label>

                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>

            </div>

            <div className="field">

              <label htmlFor="cf-subject">
                Subject
              </label>

              <input
                id="cf-subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={update}
                placeholder="What is this about?"
                required
              />

            </div>

            <div className="field">

              <label htmlFor="cf-message">
                Message
              </label>

              <textarea
                id="cf-message"
                name="message"
                value={form.message}
                onChange={update}
                placeholder="Tell me about the role or project."
                required
                rows="6"
              />

            </div>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={sending}
            >

              {sending ? "Sending..." : "Send message"}

              {!sending && (
                <Icon
                  name="send"
                  size="ic-sm"
                />
              )}

            </button>

            {note.text && (
              <p
                className={note.done ? "form-success" : "form-error"}
                style={{
                  marginTop: "15px"
                }}
              >
                {note.text}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}