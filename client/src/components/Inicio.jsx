import React from "react";
import { Link } from "react-router-dom";
import Diego from "../img/Imagen4.gif";

function Inicio() {
  const habilidades = [
    "Empatía",
    "Dedicación",
    "Autónomo",
    "Comunicativo",
    "Liderazgo",
    "Mentalidad ágil",
    "Creatividad",
  ];
  return (
    <div className="p-8s bg-gray-300">
      <div className=" flex flex-col md:flex-row items-center ">
        <div className="md:w-2/3 md:pl-4">
          <h1 className="text-4xl font-bold text-center mb-2">
            Hola!, Soy Diego Patiño 👋
          </h1>
          <h2 className="text-xl text-center">Fullstack Developer</h2>
          <p className="mt-4 text-center  text-lg">
            Soy desarrollador web, graduado en Soy Henry, donde adquirí una
            sólida formación y experiencia en el campo de la informática. Mi
            formación se centra en el desarrollo web como Fullstack developer,
            con un profundo conocimiento en tecnologías clave como HTML, CSS,
            Javascript, Vite, React, Redux, Node.js, Sequelize, PostgreSQL, SQL,
            Visual Studio, Git, Cloudinary Bootstrap, Tailwind Postman y
            Express.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center items-center">
          <img src={Diego} alt="Tu Foto de Perfil" className="w-100 h-100" />
        </div>
      </div>
      <div>
        <div>
          <h3 className="text-2xl font-semibold text-center">
            Habilidades Clave
          </h3>
          <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {habilidades.map((habilidad, index) => (
              <li key={index} className="text-center">
                {" "}
                {/* Centrar elementos de la lista */}
                {habilidad}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center mb-12">
          <Link
            to="/portafolio"
            className="btn-primary mr-4 hover:bg-blue-600 hover:text-white rounded-full transition duration-300 ease-in-out"
          >
            Ver mi Portafolio
          </Link>
          <Link
            to="/contacto"
            className="btn-secondary hover:bg-gray-600 hover:text-white rounded-full transition duration-300 ease-in-out"
          >
            Contactarme
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
