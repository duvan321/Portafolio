const { Router } = require("express");
const portafolioHandler = require("../Routes/portafolioRoute");

const router = Router(); // Esta instancia principal se utilizará para agrupar y organizar las rutas relacionadas en su aplicación.
router.use("/portafolio", portafolioHandler);

module.exports = router;
