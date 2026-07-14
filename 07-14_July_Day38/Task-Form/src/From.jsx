import React from "react";
import "./From.css";
import spotifyLogo from "../public/Logo.png";

export default function SpotifyLoginForm({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [remember, setRemember] = React.useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: email.trim(),
      displayName: displayName.trim(),
      remember,
    });
  }

  return (
    <div className="spotifyPage">
      <div className="spotifyCard" role="region" aria-label="Spotify Login">
        <div className="spotifyHeader">
          <img
            src={spotifyLogo}
            alt="Spotify"
            className="spotifyLogo"
            width={52}
            height={52}
          />
          <div>
            <h1 className="spotifyTitle">Log in to Spotify</h1>
            <p className="spotifySubtitle">Continue with your account</p>
          </div>
        </div>

        <form className="spotifyForm" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              autoComplete="email"
            />
          </label>

          <label className="field">
            <span>Display name</span>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="What should we call you?"
              required
              autoComplete="nickname"
            />
          </label>

          <label className="checkRow">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span>Remember me</span>
          </label>

          <button type="submit" className="loginBtn">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
