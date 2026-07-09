export default function PhilosophyPage({ className, onTurn }) {
  return (
    <div className={`page-front ${className}`}>
      <h1 className="title">My Philosophy</h1>
      <div className="workeduc-box">
        <div className="workeduc-content">
          <span className="year"><i className="bx bx-bullseye"></i>Intentionality</span>
          <h3>Deliberate Practice</h3>
          <p>
            My approach to development is rooted in "studied intentionality." I prioritize building, shipping, and iterating on projects to refine my skills and logic.
          </p>
        </div>
        <div className="workeduc-content">
          <span className="year"><i className="bx bx-code-alt"></i>Interfaces</span>
          <h3>Considered, Not Generated</h3>
          <p>
            I focus on creating interfaces that feel highly intentional, carefully crafted, and tailored for exceptional user experiences.
          </p>
        </div>
      </div>
      <span className="number-page">1</span>
      <span className="nextprev-btn" onClick={onTurn}>
        <i className="bx bx-chevron-right"></i>
      </span>
    </div>
  );
}
