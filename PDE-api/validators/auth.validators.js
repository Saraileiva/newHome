const { body } = require("express-validator");

const validators = {};
const passwoordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/

validators.registerValidator = [
    body("first_name")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El campo debe de ser una cadena de texto!")
        .isLength({ min: 1, max: 20 }).withMessage("El campo requiere como mínimo 1 caracter y máximo 20!"),
    body("last_name")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El campo debe de ser una cadena de texto!")
        .isLength({ min: 1, max: 20 }).withMessage("El campo requiere como mínimo 1 caracter y máximo 20!"),
    body("email_address")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isEmail().withMessage("El campo debe de tener formato de correo example@example.com!"),
    body("passwoord")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isLength({ min: 8, max: 20 }).withMessage("El campo requiere como mínimo 8 caracteres y máximo 20!")
        .matches(passwoordRegexp).withMessage("El formato de la contraseña es al menos 1 letra maysucula, 1 minuscula y un numero, ademas debe de estar en el rango de 8 a 32 caractrers!")
]

validators.loginValidator = [
    body("email_address")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isEmail().withMessage("El campo debe de tener formato de correo example@example.com!"),
    body("passwoord")
        .isLength({ min: 8, max: 20 }).withMessage("El campo requiere como mínimo 8 caracteres y máximo 20!")
        .notEmpty().withMessage("El campo no puede estar vacío!")
]

module.exports = validators;