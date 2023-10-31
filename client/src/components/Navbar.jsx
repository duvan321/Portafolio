import React, { useState } from "react";
import { Link } from "react-router-dom";
import Diego from "../img/diego.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar bg-gray-900">
      <div className="container">
        <div className="">
          <Link to="/">
            <img src={Diego} alt="Logo" className="logo" />
          </Link>
        </div>

        <div
          className={`menu md:hidden ${menuOpen ? "open" : ""}`}
          onClick={handleMenuClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="main-grid-item-icon"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <line x1="21" x2="3" y1="10" y2="10" />
            <line x1="21" x2="3" y1="6" y2="6" />
            <line x1="21" x2="3" y1="14" y2="14" />
            <line x1="21" x2="3" y1="18" y2="18" />
          </svg>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : "hidden"} md:flex`}>
          <li>
            <Link to="/sobre-mi" className="botone1 boton">
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link to="/portafolio" className="botone2 boton">
              Portafolio
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="botone3 boton">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
