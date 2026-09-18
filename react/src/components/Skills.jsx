import Icon from "./Icon.jsx";
import { skills } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="sec-head reveal">
          <h2 className="sec-title">Skills &amp; technologies</h2>
          <p className="sec-sub">The tools I use across the stack, from interface work to databases and API testing.</p>
        </div>
        <div className="skill-grid">
          {skills.map((group, i) => (
            <div className={`card reveal d${i}`} key={group.title}>
              <div className="card-ic"><Icon name={group.icon} /></div>
              <h3>{group.title}</h3>
              <p className="meta">{group.meta}</p>
              <ul className="tags">
                {group.items.map((item) => <li className="tag" key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
