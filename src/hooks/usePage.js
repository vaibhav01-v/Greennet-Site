import { useEffect } from "react";
// Sets the document title and meta description for each page.
export default function usePage(title, desc) {
  useEffect(() => {
    document.title = `${title} | GreenNest`;
    let m = document.querySelector("meta[name=description]");
    if (m && desc) m.content = desc;
  }, [title, desc]);
}
