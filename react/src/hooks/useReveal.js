import { useEffect } from "react";

/* Adds the .in class to .reveal elements as they scroll into view.
   Pass a dependency (e.g. the active project filter) to re-scan after a re-render. */
export default function useReveal(dep) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(".reveal:not(.in)");
    if (reduced) {
      nodes.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}
