import axios from "axios";
import Swal from "sweetalert2";

// Accede al archivo JSON directamente desde el directorio público
import data from "../../public/db.json"; // Importa el archivo JSON directamente

export const getPortafolio = () => async (dispatch) => {
  try {
    // Usa los datos importados
    dispatch({
      type: "GET_PORTAFOLIO",
      payload: data.portafolio,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
// export const form = (formData) => {
//   return async function () {
//     try {
//       await axios.post("/portafolio/contacto", formData);
//       Swal.fire({
//         title: "Envío de formulario exitoso",
//         icon: "success",
//       });
//     } catch (error) {
//       Swal.fire({
//         title: "Error al enviar e formulario",
//         icon: "error",
//       });
//     }
//   };
// };
