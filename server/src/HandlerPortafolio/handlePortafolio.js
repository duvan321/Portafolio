const {
  getPortafolio,
  contactoFormulario,
  getPortafolioId,
} = require("../controller.js/get.portafolio");

const portafolioHandler = async (req, res) => {
  try {
    const newPortafolio = await getPortafolio();
    res.status(200).json(newPortafolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const portafolioHandlerId = async (req, res) => {
  const { id } = req.params;
  try {
    const newPort = await getPortafolioId(id);
    res.status(200).json(newPort);
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
  portafolioHandlerId,
};
