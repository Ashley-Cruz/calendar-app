const { response } = require('express');
const {validationResult} = require('express-validator');

const validarCampos = (req, res = response, next) => {
    //Manejo de errores
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next(); //Si se ejecutó correctamente, es decir, no había errores, el next es para que se sigan ejecutando las demás líneas
}

module.exports = {
    validarCampos
}