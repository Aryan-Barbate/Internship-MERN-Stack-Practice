import React from "react";
import SpotifyLoginForm from "./From.jsx";
import "./App.css";

function DetailsPage({ profile, onBack }) {
  return (
    <div className="detailsPage">
      <div className="detailsCard" role="region" aria-label="Login details">
        <div className="detailsTop">
          <div className="detailsBadge">Redirected</div>
          <h1 className="detailsTitle">
            Welcome{profile.displayName ? `, ${profile.displayName}` : ""}!
          </h1>
          <p className="detailsSub">Your login button click redirected here.</p>
        </div>

        <div className="detailsGrid">
          <div className="kv">
            <div className="k">Email</div>
            <div className="v">{profile.email || "—"}</div>
          </div>
          <div className="kv">
            <div className="k">Remember me</div>
            <div className="v">{profile.remember ? "Yes" : "No"}</div>
          </div>
        </div>

        <button className="backBtn" onClick={onBack} type="button">
          Back to login
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = React.useState("login");
  const [profile, setProfile] = React.useState(null);

  function handleLogin(payload) {
    setProfile(payload);
    setPage("details");
  }

  if (page === "details") {
    return <DetailsPage profile={profile} onBack={() => setPage("login")} />;
  }

  return <SpotifyLoginForm onLogin={handleLogin} />;
}
