const { Router } = require("express");

const {
  portafolioHandler,
  contacto,
  portafolioHandlerId,
} = require("../HandlerPortafolio/handlePortafolio");

const portaRouter = Router();
portaRouter.get("/", portafolioHandler);
portaRouter.get("/:id", portafolioHandlerId);
portaRouter.post("/contacto", contacto);

module.exports = portaRouter;
