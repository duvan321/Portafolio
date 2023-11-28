import React from "react";
import { Link } from "react-router-dom";
import Diego from "../img/Imagen4.gif";
import { CSSTransition } from "react-transition-group";

function Inicio() {
  const habilidades = [
    "Liderazgo",
    "Empatía",
    "Trabajo en equipo",
    "Comunicación efectiva",
    "Resolución de conflictos",
    "Adaptabilidad",
    "Pensamiento crítico",
  ];

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:pl-4">
          <h1 className="text-4xl text-yellow-400 font-bold text-center mb-2">
            Hola!, Soy Diego Patiño 👋
          </h1>
          <h2 className="text-xl text-center">Fullstack Developer</h2>
          <p className="mt-4 text-center text-lg mb-6">
            Full Stack developer con experiencia en NodeJS, SQL, Sequelize,
            PostgreSQL, Express, React, Redux, JavaScript, Bootstrap y GitHub;
            lo cual me ha permitido desarrollar proyectos desde el front-end y
            back-end. Durante mi experiencia he llevado a cabo el desarrollo de
            productos bajo metodologías ágiles (Scrum), los cuales me
            permitieron desarrollar skills orientados a la resolución de
            problemas, creatividad, dominio de diversos lenguajes de
            programación y diseño responsivo.
          </p>
        </div>
        <div className=" md:w-1/3 ml-6  flex justify-center items-center  custom-shadow-yellow">
          <img
            src={Diego}
            alt="Tu Foto de Perfil"
            className="w-100 h-100 animate-move-up-down"
          />
        </div>
      </div>
      <div>
        <div>
          <h3 className="text-2xl text-yellow-400 font-semibold text-center mt-6">
            Habilidades Blandas
          </h3>
          <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {habilidades.map((habilidad, index) => (
              <li key={index} className="text-center p-0">
                {habilidad}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center mb-12">
          <Link
            to="/portafolio"
            className="custom-button custom-button-primary mr-4 bg-gray-900"
          >
            Ver mi Portafolio
          </Link>
          <Link
            to="/contacto"
            className="custom-button custom-button-secondary"
          >
            Contactarme
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
