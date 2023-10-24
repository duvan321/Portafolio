const { Router } = require("express");

const {
  portafolioHandler,
  contacto,
} = require("../HandlerPortafolio/handlePortafolio");

const portaRouter = Router();
portaRouter.get("/", portafolioHandler);
portaRouter.post("/contacto", contacto);

module.exports = portaRouter;
