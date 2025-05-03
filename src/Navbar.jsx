import React, { useState } from 'react';
import { StrictMode } from 'react';
import Gallery from '/src/Gallery.jsx';
import Home from '/src/Home.jsx';
import Compliment from '/src/Compliments.jsx';

export default function Navbar() {
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavClick = (page, event) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  // Page components
  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (<StrictMode><Home /></StrictMode>);
      case "gallery":
        return (<StrictMode><Gallery /></StrictMode>);
      case "compliment":
        return (<StrictMode><Compliment /></StrictMode>);
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  return (
    <div>
      <div class="buffer"/>

      <nav class="navbar">
        <ul>
          <li><a href="" onClick={(e) => handleNavClick("home", e)}>
            Home
          </a></li>
          <li><a href="" onClick={(e) => handleNavClick("gallery", e)}>
            Gallery
          </a></li>
          <li><a href="" onClick={(e) => handleNavClick("compliment", e)}>
            Daily Compliment
          </a></li>
        </ul>
      </nav>

      <div>{renderContent()}</div>

    <div class="bottom">
      <p>© 2025 Danny Peelen. All Rights Reserved</p>
    </div>
    </div>
  );
}
