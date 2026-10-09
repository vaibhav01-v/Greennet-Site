import { useState } from 'react';
import { SERVICES } from '../data.js';

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const OWNER_EMAIL = import.meta.env.VITE_OWNER_EMAIL || 'vaibhavghodke333@gmail.com';
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const empty = { name: '', email: '', phone: '', service: '', message: '', website: '' };

const rules = {
  name: v => v.trim().length > 1 || 'Please enter your full name.',
  email: v => /^\S+@\S+\.\S+$/.test(v) || 'Please enter a valid email address (e.g. name@example.com).',
  phone: v => /^[\d\s()+-]{7,}$/.test(v) || 'Please enter a valid mobile number (at least 7 digits).',
  service: v => !!v || 'Please select a service.',
  message: v => v.trim().length >= 10 || 'Please provide a message (at least 10 characters).'
};

const Field = ({ id, label, err, children }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    {children}
    {err && <p className="err" role="alert">{err}</p>}
  </div>
);

export default function ContactForm() {
  const [v, setV] = useState(empty);
  const [errs, setErrs] = useState({});
  const [st, setSt] = useState(null);
  const [busy, setBusy] = useState(false);

  const bind = k => ({
    id: k,
    name: k,
    value: v[k],
    onChange: e => setV({ ...v, [k]: e.target.value }),
    'aria-invalid': !!errs[k]
  });

  async function submit(e) {
    e.preventDefault();
    setSt(null);

    // Form validation
    const er = {};
    for (const k in rules) {
      const r = rules[k](v[k]);
      if (r !== true) er[k] = r;
    }
    setErrs(er);

    const keys = Object.keys(er);
    if (keys.length) {
      setSt({ ok: false, text: 'Please correct the highlighted fields before submitting.' });
      document.getElementById(keys[0])?.focus();
      return;
    }

    // Honeypot check for spam bots
    if (v.website) return;

    setBusy(true);

    // Payload formatted so the owner gets structured user info and the user gets auto-response
    const payload = {
      "Customer Name": v.name,
      "Customer Email": v.email,
      "Mobile Number": v.phone,
      "Service Selected": v.service,
      "Enquiry Message": v.message,
      _subject: `New GreenNest Enquiry from ${v.name} (${v.service})`,
      _replyto: v.email,
      _template: "table",
      _autoresponse: `Dear ${v.name},\n\nThank you for reaching out to GreenNest!\n\nWe have received your enquiry regarding "${v.service}". Our team is reviewing your requirements and will contact you at ${v.phone} or ${v.email} within 1 business day.\n\nHere is a copy of your submitted details:\n- Name: ${v.name}\n- Mobile: ${v.phone}\n- Service: ${v.service}\n- Message: ${v.message}\n\nWarm regards,\nGreenNest Team`
    };

    try {
      let targetUrl = ENDPOINT;
      let headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
      let bodyData = JSON.stringify(payload);

      if (!targetUrl && WEB3FORMS_KEY) {
        targetUrl = 'https://api.web3forms.com/submit';
        bodyData = JSON.stringify({ access_key: WEB3FORMS_KEY, ...payload });
      } else if (!targetUrl && OWNER_EMAIL && !OWNER_EMAIL.includes('example.com')) {
        targetUrl = `https://formsubmit.co/ajax/${OWNER_EMAIL}`;
      }

      const submittedUser = { ...v };

      if (targetUrl) {
        const response = await fetch(targetUrl, {
          method: 'POST',
          headers: headers,
          body: bodyData
        });

        if (!response.ok) throw new Error('Submission failed');

        setSt({
          ok: true,
          user: submittedUser,
          text: `Thank you for your enquiry, ${submittedUser.name}! All your details have been sent to the owner, and a confirmation email was dispatched to ${submittedUser.email}.`
        });
        setV(empty);
      } else {
        // Fallback: Direct Mailto
        const subject = encodeURIComponent(`GreenNest Enquiry from ${submittedUser.name}`);
        const body = encodeURIComponent(
          `Enquiry Details:\n-----------------\nName: ${submittedUser.name}\nEmail: ${submittedUser.email}\nMobile No: ${submittedUser.phone}\nService: ${submittedUser.service}\n\nMessage:\n${submittedUser.message}`
        );
        const mailtoUrl = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;

        window.location.href = mailtoUrl;

        setSt({
          ok: true,
          user: submittedUser,
          text: `Thank you, ${submittedUser.name}! Opening your email app to send your enquiry to ${OWNER_EMAIL}.`
        });
        setV(empty);
      }
    } catch (err) {
      setSt({
        ok: false,
        text: `Unable to send message automatically. Please try again or email us directly at ${OWNER_EMAIL}.`
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      {st && st.ok ? (
        <div style={{
          padding: '1.5rem',
          borderRadius: '12px',
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          color: 'var(--text-color, #1f2937)',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#15803d' }}>🎉 Thank You for Your Enquiry!</h3>
          <p style={{ margin: '0 0 1rem 0', fontSize: '1rem', lineHeight: '1.5' }}>
            {st.text}
          </p>
          <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '0.9rem' }}>
            <strong>Submitted Details:</strong>
            <ul style={{ margin: '0.5rem 0 0 1rem', padding: 0 }}>
              <li><strong>Name:</strong> {st.user?.name}</li>
              <li><strong>Email:</strong> {st.user?.email}</li>
              <li><strong>Mobile No:</strong> {st.user?.phone}</li>
              <li><strong>Service Requested:</strong> {st.user?.service}</li>
            </ul>
          </div>
          <button
            className="btn"
            style={{ marginTop: '1rem' }}
            onClick={() => setSt(null)}
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          <Field id="name" label="Full Name *" err={errs.name}>
            <input {...bind('name')} placeholder="e.g. Sarah Jenkins" autoComplete="name" />
          </Field>

          <Field id="email" label="Email Address *" err={errs.email}>
            <input {...bind('email')} type="email" placeholder="e.g. sarah@example.com" autoComplete="email" />
          </Field>

          <Field id="phone" label="Mobile Number *" err={errs.phone}>
            <input {...bind('phone')} type="tel" placeholder="e.g. +91 9579428087" autoComplete="tel" />
          </Field>

          <Field id="service" label="Service Required *" err={errs.service}>
            <select {...bind('service')}>
              <option value="">Choose a service...</option>
              {SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
            </select>
          </Field>

          <Field id="message" label="How can we help? *" err={errs.message}>
            <textarea {...bind('message')} rows={5} placeholder="Describe your garden space, project details, or any questions..." />
          </Field>

          <input
            className="hp"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={v.website}
            onChange={e => setV({ ...v, website: e.target.value })}
          />

          <button className="btn" type="submit" disabled={busy}>
            {busy ? 'Sending Enquiry…' : 'Submit Enquiry'}
          </button>

          {st && !st.ok && (
            <div role="status" style={{ marginTop: '1rem' }}>
              <p className="note bad">{st.text}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
}


