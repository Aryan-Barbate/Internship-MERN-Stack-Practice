export default function ProjectsPage({ className, onTurn }) {
  return (
    <div className={`page-back ${className}`}>
      <h1 className="title">Projects</h1>
      <div className="workeduc-box">
        <div className="workeduc-content">
          <span className="year"><i className="bx bx-laptop"></i>Web</span>
          <h3>Linea Flora</h3>
          <p>A creative builder tool developed using React and Tailwind CSS.</p>
        </div>
        <div className="workeduc-content">
          <span className="year"><i className="bx bx-aperture"></i>API Tool</span>
          <h3>AniScope</h3>
          <p>A live product that interacts with the Jikan API, built using React and JavaScript.</p>
        </div>
        <div className="workeduc-content">
          <span className="year"><i className="bx bxl-github"></i>Developer Tool</span>
          <h3>GitHub Finder</h3>
          <p>A developer tool that utilizes the GitHub API.</p>
        </div>
      </div>
      <span className="number-page">2</span>
      <span className="nextprev-btn back" onClick={onTurn}>
        <i className="bx bx-chevron-left"></i>
      </span>
    </div>
  );
}
