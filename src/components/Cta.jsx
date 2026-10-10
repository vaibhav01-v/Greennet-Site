import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
export default function Cta() {
  return (
    <section className="dark">
      <Reveal className="wrap" style={{ textAlign: "center" }}>
        <h2 style={{ marginInline: "auto" }}>
          Ready to enjoy your outdoor space?
        </h2>
        <p style={{ marginInline: "auto" }}>
          Tell us about your yard. We will visit, listen, and send a clear plan
          and quote.
        </p>
        <div className="row" style={{ justifyContent: "center" }}>
          <Link className="btn" to="/contact#consult">
            Request a Consultation
          </Link>
          <Link className="btn ghost" to="/pricing">
            See pricing
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
