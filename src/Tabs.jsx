import React, { useState } from 'react';
import { StrictMode } from 'react';
import Portfolio from '/src/Home.jsx';
import Home from '/src/About.jsx';
import Resume from '/src/Extras.jsx';
import myImage from './Portrait.jpeg';

export default function App() {
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
      case "extras":
        return (<StrictMode><Portfolio /></StrictMode>);
      case "resume":
        return (<StrictMode><Resume /></StrictMode>);
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  return (
    <div>
      <nav class="navbar">
        <ul>
          <li><a href="" onClick={(e) => handleNavClick("home",e)}>
              <img src={myImage}></img>
            </a></li>
          <li><a href="" onClick={(e) => handleNavClick("home", e)}>
            About Me
          </a></li>
          <li><a href="" onClick={(e) => handleNavClick("extras", e)}>
            Portfolio
          </a></li>
          <li><a href="" onClick={(e) => handleNavClick("resume", e)}>
            Resume
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
