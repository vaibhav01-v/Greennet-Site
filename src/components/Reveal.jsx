import { useEffect, useRef, useState } from "react";
// Gentle fade-in on scroll; skipped when the visitor prefers reduced motion.
export default function Reveal({
  as: T = "div",
  className = "",
  children,
  ...p
}) {
  const r = useRef(),
    [on, setOn] = useState(false);
  useEffect(() => {
    if (
      matchMedia("(prefers-reduced-motion:reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  return (
    <T ref={r} className={`rv ${on ? "in" : ""} ${className}`} {...p}>
      {children}
    </T>
  );
}
