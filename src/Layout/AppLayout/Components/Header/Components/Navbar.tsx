import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    {
      label: "Trending",
      link: "/trending",
    },
    {
      label: "Movies",
      link: "/movies",
    },
    {
      label: "Anime",
      link: "/anime",
    },
    {
      label: "News",
      link: "/news",
    },
    {
      label: "Comics",
      link: "/comics",
    },
    {
      label: "TV Shows",
      link: "/tv-shows",
    },
  ];

  return (
    <nav className="navbar">
      <ul>
        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink data-glitch={item.label} to={item.link}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
