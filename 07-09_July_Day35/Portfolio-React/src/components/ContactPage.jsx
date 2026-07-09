export default function ContactPage({ className, onTurn, onBackProfile }) {
  return (
    <div className={`page-back ${className}`}>
      <h1 className="title">Contact Me!</h1>
      <div className="contact-box">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input type="text" className="field" placeholder="Full Name" required />
          <input type="email" className="field" placeholder="Email Address" required />
          <textarea name="" id="" cols="30" rows="10" className="field" placeholder="Your Message" required></textarea>
          <input type="submit" className="btn" value="Send Message" />
        </form>
      </div>
      <span className="number-page">6</span>
      <span className="nextprev-btn back" onClick={onTurn}>
        <i className="bx bx-chevron-left"></i>
      </span>
      <a
        href="#"
        className="back-profile"
        onClick={(e) => {
          e.preventDefault();
          onBackProfile();
        }}
      >
        <p>Profile</p>
        <i className="bx bxs-user"></i>
      </a>
    </div>
  );
}
