export default function Footer() {
  return (
    <>
      <footer>
        <div className="container foot">
          <div>
            <p className="logo">Sandeep Sahani<span>.</span></p>
            <p>Web Developer</p>
          </div>
          <p>&copy; 2026 Sandeep Sahani. All rights reserved.</p>
          <a className="to-top" href="#home">
            Back to top
            <svg className="ic-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>
          </a>
        </div>
      </footer>
    </>
  );
}
