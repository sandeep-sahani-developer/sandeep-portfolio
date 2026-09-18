import { education } from "../data/education.js";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="sec-head reveal">
          <h2 className="sec-title">Education</h2>
          <p className="sec-sub">Academic background, most recent first.</p>
        </div>
        <div className="tl-wrap reveal">
          {education.map((item) => (
            <div className="tl-item" key={item.degree}>
              <div className="edu-card">
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                </div>
                <span className="when">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
