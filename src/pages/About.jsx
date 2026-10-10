import usePage from "../hooks/usePage.js";
import Reveal from "../components/Reveal.jsx";
import Ph from "../components/Ph.jsx";
import Cta from "../components/Cta.jsx";
const VALUES = [
  ["Honest advice", "If a simpler option works, we say so."],
  [
    "Respect for nature",
    "Native, pollinator-friendly planting wherever possible.",
  ],
  ["Built to last", "Quality materials and careful installation."],
];
const TEAM = [
  ["Lead designer", "Plans every garden.", "c"],
  ["Horticulturist", "Chooses plants and soil care.", "d"],
  ["Crew lead", "Runs installs and maintenance.", "a"],
];
export default function About() {
  usePage("About us", "Learn GreenNest's story, mission, values and team.");
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h1>About GreenNest</h1>
          <p>A small team that believes every yard can be a place to relax.</p>
        </div>
      </div>
      <section>
        <div className="wrap split">
          <Reveal>
            <h2>Our story</h2>
            <p>
              GreenNest started when a landscaper and a horticulturist noticed
              that most people wanted a lovely garden but felt overwhelmed by
              the upkeep. We set out to design spaces that look good and stay
              manageable.
            </p>
            <p>
              <strong>Our mission:</strong> help every homeowner and renter
              enjoy an outdoor space that suits their life.
            </p>
          </Reveal>
          <Ph label="GreenNest team planting a border together" t="b" />
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <h2>Our values</h2>
          <div className="grid">
            {VALUES.map(([h, p]) => (
              <Reveal className="card" key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <h2>Meet the team</h2>
          <div className="grid">
            {TEAM.map(([r, d, t]) => (
              <Reveal key={r}>
                <Ph
                  label={`Portrait placeholder of ${r.toLowerCase()}`}
                  t={t}
                />
                <h3 style={{ marginTop: 12 }}>{r}</h3>
                <p>{d} Replace with team member name.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <h2>What makes us different</h2>
          <p>
            One team from design to maintenance, fixed written quotes, plans
            that fit renters as well as owners, and plant choices based on how
            much time you actually have.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
}
