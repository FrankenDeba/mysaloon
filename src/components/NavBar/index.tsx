import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar--container">
      <ul>
        <li>🏠 Home</li>
        <li>⚙️ Dashboard</li>
        <li>🛒 Cart</li>
      </ul>
    </nav>
  );
}

export default NavBar;
