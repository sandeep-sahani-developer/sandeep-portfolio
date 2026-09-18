import Icon from "./Icon.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="sec-head reveal">
          <h2 className="sec-title">Experience</h2>
          <p className="sec-sub">Where I work day to day, and what I am responsible for.</p>
        </div>
        <div className="tl-wrap reveal">
          {experience.map((job) => (
            <div className="tl-item" key={job.company + job.role}>
              <div className="exp-card">
                <div className="exp-top">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="exp-co">{job.company}</p>
                  </div>
                  <span className="when">{job.period}</span>
                </div>
                <ul className="duties">
                  {job.duties.map((duty) => (
                    <li key={duty}><Icon name="check" size="ic-sm" />{duty}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
