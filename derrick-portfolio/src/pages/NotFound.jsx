// An address that matches no page: say so plainly and offer the two likeliest ways on
const NotFound = () => (
  <section className="section page-head" data-enter aria-labelledby="nf-h">
    <div className="wrap">
      <div className="section-head">
        <p className="t-label section-num">Page not found</p>
        <h1 id="nf-h">This page isn’t here.</h1>
        <p>The link may be old or mistyped.</p>
      </div>
      <div className="btn-row">
        <a className="btn btn--primary" href="/">Go to the home page</a>
        <a className="btn btn--secondary" href="/work">See selected work</a>
      </div>
    </div>
  </section>
);

export default NotFound;
