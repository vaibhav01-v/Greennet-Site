import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Scrolls to #anchors after navigation, otherwise to the top of the new page.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const b = matchMedia("(prefers-reduced-motion:reduce)").matches
      ? "auto"
      : "smooth";
    const el = hash && document.getElementById(hash.slice(1));
    el ? el.scrollIntoView({ behavior: b }) : scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
