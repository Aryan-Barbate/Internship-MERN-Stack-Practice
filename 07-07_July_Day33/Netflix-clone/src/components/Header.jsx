import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <a href="/" className="logo" aria-label="Netflix Home">
        <img
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVBEN9I57czDc_uW4ZnDTNTb9hWvK70hYAqf0VNv_dsufIxZqfNclKrp7ugn5j0DkKCYy_4ncEpi6fJk1wpPuLO61r5YUWiEbVjxFpCESIWdJwAAOvAX.svg"
          alt="Netflix"
          className="logo-img"
        />
      </a>
      <button className="cta-button">Sign In</button>
    </header>
  );
};

export default Header;
