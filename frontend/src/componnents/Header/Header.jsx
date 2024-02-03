import React, { useState } from "react";
import "./Header.css";

function Header(props) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handlerToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a href="#" className="brand">
          Skyne++
        </a>
        <div
          className={`burger ${toggleMenu ? "is-active" : ""}`}
          id="burger"
          onClick={handlerToggleMenu}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className={`menu ${toggleMenu ? "is-active" : ""}`} id="menu">
          <ul className="menu-inner">
            <li className="menu-item">
              <a href="#" className="menu-link">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Feature
              </a>
            </li>
            {/* <li className="menu-item">
              <a href="#" className="menu-link">
                Product
              </a>
            </li> */}
            <li className="menu-item">
              <a href="#" className="menu-link">
                Support
              </a>
            </li>
          </ul>
        </div>
        {/* <a href="#" className="menu-block">
          Discover
        </a> */}
      </nav>
    </header>
  );
}

export default Header;
