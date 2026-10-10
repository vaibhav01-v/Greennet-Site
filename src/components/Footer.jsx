import { Link } from "react-router-dom";
import { NAV } from "../data.js";
export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="grid">
          <div>
            <Link className="logo" style={{ color: "#fff" }} to="/">
              GreenNest
            </Link>
            <p>
              Beautiful, easy-to-maintain outdoor spaces for homeowners and
              renters.
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              {NAV.map(([to, l]) => (
                <li key={to}>
                  <Link to={to}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>(555) 010-0123</li>
              <li>
                <a href="mailto:hello@greennest.example">
                  hello@greennest.example
                </a>
              </li>
              <li>Mon–Sat, 8am–6pm</li>
            </ul>
          </div>
          <div>
            <h2>Legal</h2>
            <ul>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <p style={{ marginTop: 32, fontSize: ".9rem" }}>
          © {new Date().getFullYear()} GreenNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
