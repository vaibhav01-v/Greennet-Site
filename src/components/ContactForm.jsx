import { useState, useEffect } from "react";
import { SERVICES } from "../data.js";

const OWNER_EMAIL =
  import.meta.env.VITE_OWNER_EMAIL || "vaibhavghodke333@gmail.com";

const empty = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "",
};

const rules = {
  name: (v) => v.trim().length > 1 || "Please enter your full name.",
  email: (v) =>
    /^\S+@\S+\.\S+$/.test(v) ||
    "Please enter a valid email address (e.g. name@example.com).",
  phone: (v) =>
    /^[\d\s()+-]{7,}$/.test(v) ||
    "Please enter a valid mobile number (at least 7 digits).",
  service: (v) => !!v || "Please select a service.",
  message: (v) =>
    v.trim().length >= 10 ||
    "Please provide a message (at least 10 characters).",
};

const Field = ({ id, label, err, children }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    {children}
    {err && (
      <p className="err" role="alert">
        {err}
      </p>
    )}
  </div>
);

export default function ContactForm() {
  const [v, setV] = useState(empty);
  const [errs, setErrs] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.search.includes("submitted=true")
    ) {
      setSubmitted(true);
    }
  }, []);

  const bind = (k) => ({
    id: k,
    name: k,
    value: v[k],
    onChange: (e) => setV({ ...v, [k]: e.target.value }),
    "aria-invalid": !!errs[k],
  });

  function handleSubmit(e) {
    // Honeypot check
    if (v.website) {
      e.preventDefault();
      return;
    }

    // Form validation
    const er = {};
    for (const k in rules) {
      const r = rules[k](v[k]);
      if (r !== true) er[k] = r;
    }
    setErrs(er);

    const keys = Object.keys(er);
    if (keys.length) {
      e.preventDefault();
      document.getElementById(keys[0])?.focus();
    }
  }

  const redirectUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}?submitted=true`
      : "";

  return (
    <div>
      {submitted ? (
        <div
          style={{
            padding: "1.5rem",
            borderRadius: "12px",
            background: "rgba(34, 197, 94, 0.1)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            color: "var(--text-color, #1f2937)",
            marginBottom: "1.5rem",
          }}
        >
          <h3 style={{ margin: "0 0 0.5rem 0", color: "#15803d" }}>
            🎉 Thank You for Your Enquiry!
          </h3>
          <p
            style={{
              margin: "0 0 1rem 0",
              fontSize: "1rem",
              lineHeight: "1.5",
            }}
          >
            Your enquiry has been successfully sent to{" "}
            <strong>{OWNER_EMAIL}</strong>. A confirmation email has also been
            sent to your email address. Our team will get back to you within 1
            business day.
          </p>
          <button
            className="btn"
            onClick={() => {
              setSubmitted(false);
              if (window.history.replaceState) {
                window.history.replaceState(null, "", window.location.pathname);
              }
            }}
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form
          action={`https://formsubmit.co/${OWNER_EMAIL}`}
          method="POST"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* FormSubmit Configuration Fields */}
          <input
            type="hidden"
            name="_subject"
            value={`New GreenNest Enquiry from ${v.name || "Customer"}`}
          />
          <input type="hidden" name="_replyto" value={v.email} />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value={`Dear ${v.name || "Customer"},\n\nThank you for reaching out to GreenNest!\n\nWe have received your enquiry. Our team is reviewing your requirements and will contact you within 1 business day.\n\nWarm regards,\nGreenNest Team`}
          />
          <input type="hidden" name="_next" value={redirectUrl} />

          <Field id="name" label="Full Name *" err={errs.name}>
            <input
              {...bind("name")}
              placeholder="e.g. Sarah Jenkins"
              autoComplete="name"
              required
            />
          </Field>

          <Field id="email" label="Email Address *" err={errs.email}>
            <input
              {...bind("email")}
              type="email"
              placeholder="e.g. sarah@example.com"
              autoComplete="email"
              required
            />
          </Field>

          <Field id="phone" label="Mobile Number *" err={errs.phone}>
            <input
              {...bind("phone")}
              type="tel"
              placeholder="e.g. +91 9579428087"
              autoComplete="tel"
              required
            />
          </Field>

          <Field id="service" label="Service Required *" err={errs.service}>
            <select {...bind("service")} required>
              <option value="">Choose a service...</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </Field>

          <Field id="message" label="How can we help? *" err={errs.message}>
            <textarea
              {...bind("message")}
              rows={5}
              placeholder="Describe your garden space, project details, or any questions..."
              required
            />
          </Field>

          {/* Honeypot field for bot protection */}
          <input
            className="hp"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={v.website}
            onChange={(e) => setV({ ...v, website: e.target.value })}
          />

          <button className="btn" type="submit">
            Submit Enquiry
          </button>
        </form>
      )}
    </div>
  );
}
