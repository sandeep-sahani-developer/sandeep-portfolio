export default function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="sec-head reveal">
            <h2 className="sec-title">About me</h2>
            <p className="sec-sub">A short introduction to how I work and what I have been building.</p>
          </div>
          <div className="about-grid">
            <div className="prose reveal">
              <p>I am a passionate Web Developer with practical experience in building responsive and user-focused web applications. I have experience working with HTML, CSS, Bootstrap, JavaScript, ASP.NET with C#, SQL Server, and recently expanded my development skills into React.js and Node.js.</p>
              <p>During my professional experience, I have worked on real-time projects, website maintenance, UI improvements, database integration and API-based development. I have also learned how to connect and test REST APIs using Postman.</p>
              <p>I enjoy solving development problems, learning new technologies and turning ideas into clean, functional web experiences.</p>
            </div>
            <div className="stats reveal d2">
              <div className="stat">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <b>2024 &mdash; Present</b><span>Professional experience</span>
              </div>
              <div className="stat">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
                <b>React.js + Node.js</b><span>Modern stack</span>
              </div>
              <div className="stat">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01"/><path d="M6 17h.01"/></svg>
                <b>REST API</b><span>Integration</span>
              </div>
              <div className="stat">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>
                <b>SQL Server + MongoDB</b><span>Database</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
