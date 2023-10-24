import React, { useState } from "react";
import ContactImage from "../img/img.jpg"; // Reemplaza con la ruta correcta de tu imagen
import { form } from "../Redux/action";
import { useDispatch } from "react-redux";
import validation from "./validation/validation";
function Contacto() {
  const dispatch = useDispatch();
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
    empresa: "",
  });
  const [errors, setErrors] = useState({ allConditions: false });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors(
      validation({
        ...formData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío de datos del formulario.

    // Luego, puedes limpiar el formulario o mostrar un mensaje de éxito al usuario.
    setFormData({
      nombre: "",
      correo: "",
      mensaje: "",
      empresa: "",
    });

    dispatch(form(formData));
    setFormularioEnviado(true);
  };

  return (
    <div className="bg-gray-100">
      <div className="relative">
        <img
          src={ContactImage}
          alt="Imagen de contacto"
          className="w-full max-h-72 h-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-3xl font-bold text-gray-300">Contacto</h1>
          <p className="text-lg mt-2 text-gray-200">
            ¡Estoy encantado de conectarme contigo! Si deseas discutir
            oportunidades de trabajo, colaboraciones o simplemente saludar, no
            dudes en ponerte en contacto conmigo.
          </p>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-1/2 md:pr-6 ml-12 mt-20">
          <h2 className="text-2xl font-semibold mt-20">
            Información de Contacto
          </h2>
          <p className="mt-6">
            <span className="font-semibold">Telefono:</span>{" "}
            <a
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=573138401274&text=%28front-end+developer%29+Hi%2C+I+want+more+information+about+your+experience.+My+name+is%3A"
              title="telefono-whatsApp"
              target="_blank"
              className="text-blue-500 "
            >
              +57 3138401274
            </a>
          </p>
          <p className="mt-3">
            <span className="font-semibold">Correo electrónico:</span>{" "}
            <a
              rel="noopener noreferrer"
              href="mailto:diegoduvan321@gmail.com"
              title="Email"
              target="_blank"
              className="text-blue-500 "
            >
              Correo electrónico
            </a>
          </p>
          <p className="mt-3">
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/diego-patino1996/"
              title="LinkedIn"
              target="_blank"
              className="text-blue-500"
            >
              Mi Perfil de LinkedIn
            </a>
          </p>
          <p className="mt-3">
            <span className="font-semibold">GitHub:</span>{" "}
            <a
              rel="noopener noreferrer"
              href="https://github.com/duvan321"
              title="GitHub"
              target="_blank"
              className="text-blue-500"
            >
              Mi Perfil de GitHub
            </a>
          </p>
          <p className="mt-3">
            <span className="font-semibold">Currículum:</span>{" "}
            <a
              href="https://drive.google.com/file/d/1BAJ-7GEgf7ixzYIK9Ex7aUrYpyu8DeR4/view?usp=share_link"
              download
              target="_blank"
              className="text-blue-500"
            >
              Descargar mi Currículum
            </a>
          </p>
        </div>

        <div className="mt-6 p-4">
          <h2 className="text-2xl font-semibold text-center">
            Formulario de Contacto
          </h2>
          <p className="mt-2 text-center">
            Si prefieres, puedes utilizar el siguiente formulario para enviarme
            un mensaje y poder comunicarme contigo muchas gracias:
          </p>

          <div className="mt-1 max-w-lg mx-auto">
            {/* <!-- Card --> */}
            <div className="flex flex-col border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8">
              {/* <h2 className="mb-8 text-xl font-semibold text-gray-800">
              Fill in the form
            </h2> */}

              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 lg:gap-6">
                  {/* <!-- Grid --> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="relative">
                      <label className="block text-sm text-gray-700 font-medium">
                        Nombre:
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={formData.nombre}
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                      />

                      <div
                        className={`${
                          errors.nombre ? "" : "hidden"
                        }  absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                      >
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>

                      <p
                        className={`${
                          errors.nombre ? "" : "hidden"
                        } text-xs text-red-600 mt-2`}
                        id="password-error"
                      >
                        {errors.nombre ? errors.nombre : ""}
                      </p>
                    </div>

                    <div className="relative">
                      <label className="block text-sm text-gray-700 font-medium">
                        Correo Electrónico:
                      </label>
                      <input
                        onChange={handleChange}
                        type="email"
                        name="correo"
                        id="correo"
                        value={formData.correo}
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <div
                        className={`${
                          errors.correo ? "" : "hidden"
                        } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                      >
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                      <p
                        className={`${
                          errors.correo ? "" : "hidden"
                        } text-xs text-red-600 mt-2`}
                        id="password-error"
                      >
                        {errors.correo ? errors.correo : ""}
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Grid --> */}

                  {/* <!-- Grid --> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="relative">
                      <label className="block text-sm text-gray-700 font-medium">
                        Empresa:
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="empresa"
                        id="empresa"
                        value={formData.empresa}
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      <div
                        className={`${
                          errors.empresa ? "" : "hidden"
                        } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                      >
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                      <p
                        className={`${
                          errors.empresa ? "" : "hidden"
                        } text-xs text-red-600 mt-2`}
                        id="password-error"
                      >
                        {errors.empresa ? errors.empresa : ""}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm text-gray-700 font-medium">
                      Mensaje:
                    </label>
                    <textarea
                      onChange={handleChange}
                      type="text"
                      name="mensaje"
                      id="mensaje"
                      value={formData.mensaje}
                      className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <div
                      className={`${
                        errors.mensaje ? "" : "hidden"
                      } absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3`}
                    >
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                    <p
                      className={`${
                        errors.mensaje ? "" : "hidden"
                      } text-xs text-red-600 mt-2`}
                      id="mensaje-error"
                    >
                      {errors.mensaje ? errors.mensaje : ""}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid">
                  <button
                    disabled={!errors.allConditions}
                    className={`py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm ${
                      !errors.allConditions
                        ? "bg-gray-400 cursor-not-allowed opacity-50 hover:bg-red-600 "
                        : ""
                    } `}
                  >
                    Enviar
                  </button>
                </div>

                {formularioEnviado ? (
                  <p className="text-500 text-center texto mt-12">
                    ¡Gracias por visitarme muy pronto me comunicaré contigo!
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
