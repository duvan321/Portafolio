import React from "react";
import { Link } from "react-router-dom";
import Diego from "../img/diego.jpg";
function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center ">
          <Link to="/">
            <img
              src={Diego} // Reemplaza "/tu-logo.png" con la ruta de tu imagen de logo
              alt="Logo"
              className="w-10 h-10  rounded-full"
            />
          </Link>
        </div>

        <div className="space-x-12 ">
          <Link
            to="/sobre-mi"
            className="text-white hover:text-yellow-400 transition duration-300 "
          >
            Sobre Mí
          </Link>
          <Link
            to="/portafolio"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Portafolio
          </Link>
          <Link
            to="/contacto"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
