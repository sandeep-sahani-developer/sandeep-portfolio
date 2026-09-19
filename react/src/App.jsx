import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./hooks/useReveal.js";

/* Drop a PDF in /public and point this at it, e.g. "/Sandeep-Sahani-Resume.pdf" */
const RESUME_URL = "./components/resume.pdf";

export default function App() {
  const [active, setActive] = useState("home");
  useReveal("mount");

  /* highlight the section currently in view */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* resume buttons: linked once RESUME_URL is set */
  useEffect(() => {
    const anchors = document.querySelectorAll("a[download]");
    if (RESUME_URL) {
      anchors.forEach((a) => { a.href = RESUME_URL; });
      return;
    }
    const block = (e) => {
      e.preventDefault();
      alert("Add your resume PDF to /public and set RESUME_URL in App.jsx to link it here.");
    };
    anchors.forEach((a) => a.addEventListener("click", block));
    return () => anchors.forEach((a) => a.removeEventListener("click", block));
  }, []);

  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero />
        <hr className="rule" />
        <About />
        <hr className="rule" />
        <Skills />
        <hr className="rule" />
        <Experience />
        <hr className="rule" />
        <Projects />
        <hr className="rule" />
        <Education />
        <hr className="rule" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
