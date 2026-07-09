export default function ProfilePage({ className, onContactMe }) {
  return (
    <div className={`profile-page ${className}`}>
      <img src="/photo.jpeg" alt="Aryan Barbate" />
      <h1>Aryan Barbate</h1>
      <h3>Frontend Developer</h3>
      <div className="social-media">
        <a href="https://github.com/Aryan-Barbate/Portfolio.git"><i className="bx bxl-github"></i></a>
        <a href="#"><i className="bx bxl-linkedin"></i></a>
        <a href="#"><i className="bx bxl-twitter"></i></a>
      </div>
      <p>
        Hi, I am Aryan Barbate. I am a frontend developer building intentional interfaces, live API tools, and creative web experiences from India. Four shipped projects. One deliberate practice. Interfaces that feel considered, not generated.
      </p>
      <div className="btn-box">
        <a href="#" className="btn">Download CV</a>
        <a
          href="#"
          className="btn contact-me"
          onClick={(e) => {
            e.preventDefault();
            onContactMe();
          }}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
