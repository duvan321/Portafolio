const {
  getPortafolio,
  contactoFormulario,
} = require("../controller.js/get.portafolio");

const portafolioHandler = async (req, res) => {
  try {
    const newDriver = await getPortafolio();
    res.status(200).json(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const contacto = async (req, res) => {
  try {
    const correo = await contactoFormulario(req.body);
    res.status(200).json(correo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  portafolioHandler,
  contacto,
};
