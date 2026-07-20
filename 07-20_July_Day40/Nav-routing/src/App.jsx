import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
