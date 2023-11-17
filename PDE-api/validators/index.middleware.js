const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    // Validar los parametros (generica)
    const errors = validationResult(req);

    // Verificar errores
    if(!errors.isEmpty()) {
        return res.status(400)
            .json({
                errors: errors.array().map(error => ({ 
                    field: error.path,
                    message: error.msg
                }))
            })
    }

    // Paso al siguiente
    next();
}