import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/services", label: "Services" },
  ];

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-lg">
      <h1>Navbar</h1>
      <ul className="inline-flex gap-6 text-blue-400">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
