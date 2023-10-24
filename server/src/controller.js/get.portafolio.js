const axios = require("axios");
const { Contacto } = require("../db.js");
const { contactoLaburos } = require("../services/contacto.js");
// este controlador trae la lista de portes del objeto json y lo lleva a la DB con su id y el nombre de cada port
const getPortafolio = async () => {
  const response = await axios.get("http://localhost:5000/portafolio");
  return response.data;
};
const contactoFormulario = async (body) => {
  const { nombre, correo, empresa, mensaje } = body;
  if (!nombre || !correo || !empresa || !mensaje)
    throw Error("Datos incompletos");
  await Contacto.create({
    nombre,
    correo,
    empresa,
    mensaje,
  });
  await contactoLaburos(nombre, correo, empresa, mensaje);
  return "Todo salió bien";
};
module.exports = { getPortafolio, contactoFormulario };
