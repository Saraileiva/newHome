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

module.exports = validators;