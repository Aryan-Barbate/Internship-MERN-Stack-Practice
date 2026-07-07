import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrendingRow from "./components/TrendingRow";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <TrendingRow />
      </main>
      <footer>Netfilx Clone</footer>
    </div>
  );
};

export default App;
