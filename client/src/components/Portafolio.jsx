import React, { useEffect, useState } from "react";
import { getPortafolio } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Portafolio() {
  const porta = useSelector((state) => state.portafolio);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getPortafolio()).then(() => setLoading(false)); // Marca la carga como completa una vez que se obtienen los datos
  }, [dispatch]);

  if (loading) {
    return <div>Cargando datos...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Portafolio</h1>

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {porta.map((proyecto, index) => (
          <div key={index} className=" p-4 rounded-lg ">
            <Link to={`/detail/${proyecto.id}`}>
              <img
                src={proyecto.image.imagen} // Reemplaza con la ruta a la imagen del proyecto
                alt={proyecto.name}
                title="Haz clic para obtener más detalles"
                className="w-full h-40 object-cover rounded-lg  transform hover:scale-110 transition-transform duration-300 custom-shadow-yellow"
              />
            </Link>
            <h2 className="text-lg font-semibold mt-4">{proyecto.name}</h2>

            <div className="flex justify-between mt-2">
              <a
                target="_blank"
                href={proyecto.image.url} // Reemplaza con el enlace a la página del proyecto
                className="text-yellow-400 inline-block"
              >
                Ver Página
              </a>
              <a
                target="_blank"
                href={proyecto.image.video} // Reemplaza con el enlace a la página del proyecto
                className="text-yellow-400 inline-block "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="main-grid-item-icon"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect height="14" rx="2" ry="2" width="15" x="1" y="5" />
                </svg>
              </a>
              <a
                target="_blank"
                title="git-hub"
                href={proyecto.image.gitHub} // Reemplaza con el enlace al repositorio del proyecto
                className="text-yellow-400 inline-block"
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
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portafolio;
