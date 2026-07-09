export default function SkillsPage({ className, onTurn }) {
  return (
    <div className={`page-back ${className}`}>
      <h1 className="title">My Skills</h1>
      <div className="skills-box">
        <div className="skills-content">
          <h3>Languages & Core</h3>
          <div className="content">
            <span><i className="bx bxl-c-plus-plus"></i>C/C++</span>
            <span><i className="bx bxl-java"></i>Java</span>
            <span><i className="bx bxl-javascript"></i>JS</span>
            <span><i className="bx bxl-html5"></i>HTML</span>
            <span><i className="bx bxl-css3"></i>CSS</span>
            <span><i className="bx bxl-react"></i>React</span>
            <span><i className="bx bxl-tailwind-css"></i>Tailwind</span>
          </div>
        </div>
        <div className="skills-content">
          <h3>Tools & Deployment</h3>
          <div className="content">
            <span><i className="bx bxl-netlify"></i>Netlify</span>
            <span><i className="bx bxl-figma"></i>Figma</span>
            <span><i className="bx bxl-github"></i>GitHub</span>
          </div>
        </div>
      </div>
      <span className="number-page">4</span>
      <span className="nextprev-btn back" onClick={onTurn}>
        <i className="bx bx-chevron-left"></i>
      </span>
    </div>
  );
}
