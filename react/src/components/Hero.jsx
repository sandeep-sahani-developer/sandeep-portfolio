export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <span className="status"><span className="dot"></span> Available for opportunities</span>
            <p className="hero-hi"><svg className="ic-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg> Hi, I'm <b>Sandeep Sahani</b></p>
            <h1>Web Developer<span className="line2">Building modern &amp; scalable web experiences.</span></h1>
            <p className="hero-sub">Web Developer with hands-on experience in React.js, Node.js, ASP.NET, C#, SQL Server and REST API integration. I build responsive, user-focused web applications and continuously explore modern technologies.</p>
            <ul className="badges">
              <li className="badge">React.js</li>
              <li className="badge">Node.js</li>
              <li className="badge">ASP.NET</li>
              <li className="badge">C#</li>
              <li className="badge">SQL Server</li>
              <li className="badge">REST API</li>
            </ul>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View my work
                <svg className="ic-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a className="btn btn-ghost" href="#contact">
                <svg className="ic-sm" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                Let's connect
              </a>
              <a className="btn btn-quiet resume-link" href="#" download>
                <svg className="ic-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                Download resume
              </a>
            </div>
          </div>

          <div className="visual">
            <span className="glow"></span>
            <svg className="wires" viewBox="0 0 400 300" aria-hidden="true" preserveAspectRatio="none">
              <defs><linearGradient id="wireGrad" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#3B82F6"/><stop offset="1" stopColor="#22D3EE"/></linearGradient></defs>
              <path d="M20 250 C 90 250, 90 40, 170 40 L 360 40"/>
              <path d="M-10 60 C 70 60, 60 270, 150 270 L 380 270"/>
            </svg>
            <span className="chip-float chip-react">
              <svg className="ic-sm spin" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10.5" ry="4.2"/><ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(120 12 12)"/></svg>
              React
            </span>
            <span className="chip-float chip-node">
              <svg className="ic-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4 20.6 7v10L12 21.6 3.4 17V7L12 2.4z"/><path d="M9.6 14.4c0 .9.9 1.4 2.4 1.4s2.4-.5 2.4-1.5-1-1.3-2.4-1.5-2.4-.5-2.4-1.5.9-1.5 2.4-1.5 2.4.5 2.4 1.4"/></svg>
              Node.js
            </span>

            <div className="window">
              <div className="win-bar">
                <span className="tl"><i></i><i></i><i></i></span>
                <span className="win-title">portfolio / App.jsx</span>
              </div>
              <div className="win-body">
                <div className="code-line"><span className="ln">1</span><span className="p"><span className="k">const</span> <span className="f">developer</span> = &#123;</span></div>
                <div className="code-line"><span className="ln">2</span><span className="p">&nbsp;&nbsp;name: <span className="s">"Sandeep Sahani"</span>,</span></div>
                <div className="code-line"><span className="ln">3</span><span className="p">&nbsp;&nbsp;role: <span className="s">"Web Developer"</span>,</span></div>
                <div className="code-line"><span className="ln">4</span><span className="p">&nbsp;&nbsp;stack: [<span className="s">"React"</span>, <span className="s">"Node"</span>, <span className="s">"ASP.NET"</span>],</span></div>
                <div className="code-line"><span className="ln">5</span><span className="p">&nbsp;&nbsp;data: [<span className="s">"SQL Server"</span>, <span className="s">"MongoDB"</span>],</span></div>
                <div className="code-line"><span className="ln">6</span><span className="p">&nbsp;&nbsp;focus: <span className="s">"responsive, scalable UI"</span></span></div>
                <div className="code-line"><span className="ln">7</span><span className="p">&#125;;</span></div>
                <div className="code-line"><span className="ln">8</span><span className="c">// render the profile</span></div>
                <div className="code-line"><span className="ln">9</span><span className="p"><span className="k">export default</span> <span className="k">function</span> <span className="f">App</span>() &#123;</span></div>
                <div className="code-line"><span className="ln">10</span><span className="p">&nbsp;&nbsp;<span className="k">return</span> &lt;<span className="n">Portfolio</span> data=&#123;developer&#125; /&gt;;<span className="caret"></span></span></div>
              </div>
              <div className="api-strip">
                <span className="method">GET</span>
                <span>/api/projects</span>
                <span className="ok">200 OK &middot; 128 ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
