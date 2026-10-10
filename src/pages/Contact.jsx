import usePage from "../hooks/usePage.js";
import ContactForm from "../components/ContactForm.jsx";
export default function Contact() {
  usePage(
    "Contact",
    "Request a free consultation with GreenNest. Phone, email, service area and opening hours.",
  );
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h1>Contact us</h1>
          <p>
            Tell us about your space and we will reply within one business day.
          </p>
        </div>
      </div>
      <section id="consult">
        <div className="wrap split">
          <div>
            <h2>Request a consultation</h2>
            <ContactForm />
          </div>
          <div>
            <h2>Get in touch</h2>
            <p>
              <strong>Phone:</strong> +91 9579428087
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:vaibhavghodke333@gmail.com">
                vaibhavghodke333@gmail.com
              </a>
            </p>
            <h3>Service area</h3>
            <p>
              The city and suburbs within about 40 km. Placeholder: update with
              your areas.
            </p>
            <h3>Business hours</h3>
            <p>
              Monday to Saturday, 8am to 6pm
              <br />
              Sunday: closed
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
