import { useMemo, useState } from "react";
import Icon from "./Icon.jsx";
import useReveal from "../hooks/useReveal.js";
import { filters, projects } from "../data/projects.js";

function Mock({ project }) {
  return (
    <div className="mock">
      <div className="mock-bar">
        <span className="tl"><i /><i /><i /></span>
        <span className="url">{project.barLabel}</span>
      </div>
      <div className="mock-screen">
        <div>
          <p className="mock-name">{project.title}</p>
          <p className="mock-kind">{project.kicker}</p>
        </div>
        <div className="skeleton">
          <span className="sk w1" />
          <span className="sk w2" />
          <span className="sk-row"><span className="sk-box" /><span className="sk-box" /><span className="sk-box" /></span>
        </div>
      </div>
    </div>
  );
}

function Project({ project, reversed }) {
  const [open, setOpen] = useState(false);
  const visible = open ? project.features : project.features.slice(0, 4);
  const hasMore = project.features.length > 4;

  return (
    <article className={`project reveal${reversed ? " rev" : ""}${open ? " open" : ""}`}>
      <div className="proj-visual">
        {project.live && (
          <span className="live-flag"><span className="dot" /> Live project</span>
        )}
        <Mock project={project} />
      </div>
      <div className="proj-info">
        <span className="proj-kind">{project.type}</span>
        <h3>{project.title}</h3>
        <p className="proj-desc">{project.description}</p>
        <ul className="tags">
          {project.tech.map((t) => <li className="tag" key={t}>{t}</li>)}
        </ul>
        <ul className="features">
          {visible.map((f) => (
            <li key={f}><Icon name="check" size="ic-sm" />{f}</li>
          ))}
        </ul>
        <div className="proj-actions">
          {project.live && (
            <a className="btn btn-primary" href={project.live} target="_blank" rel="noopener noreferrer">
              View live project
              <Icon name="external" size="ic-sm" />
            </a>
          )}
          {hasMore && (
            <button className="btn btn-ghost details" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? "Hide details" : "View details"}
              <Icon name="chevronDown" size="ic-sm" className="chev" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");
  useReveal(active);

  const shown = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.cats.includes(active))),
    [active]
  );

  return (
    <section id="projects">
      <div className="container">
        <div className="sec-head reveal">
          <h2 className="sec-title">Featured work</h2>
          <p className="sec-sub">Real-world websites and web applications I've designed and developed.</p>
        </div>

        <div className="filters reveal" role="group" aria-label="Filter projects by category">
          {filters.map((f) => (
            <button
              key={f.id}
              className="filter"
              aria-pressed={active === f.id}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects">
          {shown.map((p, i) => (
            <Project key={p.id} project={p} reversed={i % 2 === 1} />
          ))}
        </div>

        {shown.length === 0 && (
          <p className="form-note">No projects in this category yet. Choose another filter to see the rest of the work.</p>
        )}
      </div>
    </section>
  );
}
