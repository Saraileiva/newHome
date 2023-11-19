const { body } = require("express-validator");

const validators = {};
const roladminRegexp = "administrator"
const rolsuserRegexp = "standar_user"

validators.findById = [
    body("user_id")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isInt().withMessage("El campo debe de ser un valor entero!")
]

validators.updateUserRol = [
    body("user_id")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isInt().withMessage("El campo debe de ser un valor entero!"),
    body("new_role")
        .notEmpty().withMessage("El campo no puede estar vacío")
        .isIn(['administrator', 'standar_user']).withMessage("Solo se puede cambiar por los roles standar_user y administrator")
]

validators.deleteUser = [
    body("email_address")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isEmail().withMessage("El campo debe de ser una dirección de correo example@example.com"),
]

validators.updateProfile = [
    body("first_name")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El campo debe de ser una cadena de texto!")
        .isLength({ min: 1, max: 20 }).withMessage("El campo requiere como mínimo 1 caracter y máximo 20!"),
    body("last_name")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El campo debe de ser una cadena de texto!")
        .isLength({ min: 1, max: 20 }).withMessage("El campo requiere como mínimo 1 caracter y máximo 20!"),
    body("country")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El campo debe de ser una cadena de texto!")
        .isLength({ min: 1, max: 50 }).withMessage("El campo requiere como mínimo 1 caracter y máximo 50!"),
    body("address")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El campo debe de ser una cadena de texto!")
        .isLength({ min: 1, max: 255 }).withMessage("El campo requiere como mínimo 1 caracter y máximo 255!"),
    body("cel_extension")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isInt().withMessage("El campo debe de ser un número!"),
    body("cel_number")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isInt().withMessage("El campo debe de ser un número!")
]

module.exports = validators;