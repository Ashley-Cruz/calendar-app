/*
    Event Routes
    host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const {validarCampos} = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const {isDate} = require("../helpers/isDate");

const router = Router();

//Todas tienen que pasar por la validación de JWT
router.use(validarJWT)

//Obtener eventos
router.get('/', 
    [
        validarCampos
    ], 
getEventos);

//Crear un evento nuevo
router.post('/', 
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ], 
crearEvento);

//Actualizar un evento
router.put('/:id', 
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ], 
actualizarEvento);

//Eliminar un evento
router.delete('/:id', 
    [
        validarCampos
    ], 
eliminarEvento)

module.exports = router;