/*  Events routes
    /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();

// Todas las rutas van a pasar por JWT
router.use(validarJWT);

const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

// Obtener eventos
router.get("/", getEventos);

// Crear nuevo Evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

// Actualizar Evento
router.put("/:id", actualizarEvento);

// Borrar Evento
router.delete("/:id", eliminarEvento);

module.exports = router;
