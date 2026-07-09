export default function ServicesPage({ className, onTurn }) {
  return (
    <div className={`page-front ${className}`}>
      <h1 className="title">My Services</h1>
      <div className="services-box">
        <div className="services-content">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>Building creative web experiences using React and modern tooling.</p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="services-content">
          <i className="bx bx-layer"></i>
          <h3>API Tools</h3>
          <p>Developing live products that interact seamlessly with external data sources.</p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="services-content">
          <i className="bx bxs-paint"></i>
          <h3>Creative Interfaces</h3>
          <p>Creating interfaces that feel considered and intentional, not generated.</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
      <span className="number-page">3</span>
      <span className="nextprev-btn" onClick={onTurn}>
        <i className="bx bx-chevron-right"></i>
      </span>
    </div>
  );
}
