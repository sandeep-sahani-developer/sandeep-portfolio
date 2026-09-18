import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label="Sandeep Sahani, back to top">SANDEEP<span>.</span></a>
        <span className="status"><span className="dot" /> Available for opportunities</span>

        <nav
          className={`nav-links${open ? " open" : ""}`}
          id="navLinks"
          aria-label="Main"
          onClick={() => setOpen(false)}
        >
          {links.map((label) => {
            const id = label.toLowerCase();
            return (
              <a key={id} href={`#${id}`} className={active === id ? "active" : undefined}>
                {label}
              </a>
            );
          })}
        </nav>

        <a className="btn btn-ghost btn-sm nav-cta" href="./resume.pdf" download>
          <Icon name="download" size="ic-sm" />
          Resume
        </a>

        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen(!open)}
        >
          <Icon name="menu" />
        </button>
      </div>
    </header>
  );
}
