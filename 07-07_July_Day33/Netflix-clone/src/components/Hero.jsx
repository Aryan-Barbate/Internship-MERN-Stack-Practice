import React from "react";
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>

        <form action="" className="email-box" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" name="" id="" placeholder="Email address" required/>

            <button type="submit" className="cta-button">Get Started</button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
