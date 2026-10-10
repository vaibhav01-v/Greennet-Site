import usePage from "../hooks/usePage.js";
import { LEGAL } from "../data.js";
export default function Legal({ kind }) {
  const { title, items } = LEGAL[kind];
  usePage(title, `GreenNest ${title} starter text for owner review.`);
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <h1>{title}</h1>
          <p>Last updated: [date]</p>
        </div>
      </div>
      <section>
        <div className="wrap legal">
          <p className="draft">
            <strong>Starter text.</strong> This is a template, not legal advice.
            Have the business owner and a qualified professional review and
            replace it before launch.
          </p>
          {items.map(([h, p]) => (
            <div key={h}>
              <h2 style={{ fontSize: "1.4rem" }}>{h}</h2>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
