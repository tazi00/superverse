import React from "react";

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
            <a data-glitch={item.label} href={item.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
