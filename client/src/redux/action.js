import axios from "axios";
import Swal from "sweetalert2";

export const getPortafolio = () => {
  try {
    return async function (dispatch) {
      const response = await axios.get("/portafolio/");
      dispatch({
        type: "GET_PORTAFOLIO",
        payload: response.data,
      });
    };
  } catch (error) {
    dispatch(error.message);
  }
};
export const form = (formData) => {
  return async function () {
    try {
      await axios.post("/portafolio/contacto", formData);
      Swal.fire({
        title: "Envío de formulario exitoso",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error al enviar e formulario",
        icon: "error",
      });
    }
  };
};
