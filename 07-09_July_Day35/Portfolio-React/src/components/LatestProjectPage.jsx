export default function LatestProjectPage({ className, onTurn }) {
  return (
    <div className={`page-front ${className}`}>
      <h1 className="title">Latest Project</h1>
      <div className="portfolio-box">
        <div className="img-box">
          <img src="/linea_flora.png" alt="Linea Flora" />
        </div>
        <div className="info-box">
          <div className="info-title">
            <h3>Linea Flora</h3>
            <a href="https://github.com/Aryan-Barbate/Linea-Flora.git">
              Source Code<i className="bx bx-link-external"></i>
            </a>
          </div>
          <p>React, Tailwind CSS</p>
          <p>A creative builder tool developed using React and Tailwind CSS.</p>
        </div>
        <div className="btn-box">
          <a href="https://github.com/Aryan-Barbate/Linea-Flora.git" className="btn">Source Code</a>
          <a href="https://github.com/Aryan-Barbate" className="btn">More Projects</a>
        </div>
      </div>
      <span className="number-page">5</span>
      <span className="nextprev-btn" onClick={onTurn}>
        <i className="bx bx-chevron-right"></i>
      </span>
    </div>
  );
}
