// Photo placeholder. Swap for <img src alt> when real photography is ready.
export default function Ph({ label, t = "a" }) {
  return <figure className="ph" data-t={t} role="img" aria-label={label} />;
}
