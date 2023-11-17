const { body } = require("express-validator");

const validators = {};

validators.findById = [
    body("dog_id")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isInt().withMessage("El campo debe de ser un valor entero!")
]

validators.createDog = [
    body("dog_name")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El nombre debe de ser una cadena de texto")
        .isLength({ min: 1, max: 50 }).withMessage("El campo requiere como mínimo 1 caracter y máximo de 50!"),
    body("dog_age")
        .notEmpty().withMessage("El campo no puede estar vacío")
        .isInt().withMessage("El campo debe de ser un valor entero!"),
    body("race")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El nombre debe de ser una cadena de texto")
        .isLength({ min: 1, max: 50 }).withMessage("El campo requiere como mínimo 1 caracter y máximo de 50!"),
]

validators.updateDogAge = [
    body("dog_id")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isInt().withMessage("El campo debe de ser un valor entero!"),
    body("new_age")
        .notEmpty().withMessage("El campo no puede estar vacío")
        .isInt().withMessage("El campo debe de ser un valor entero!")
]

validators.deleteUser = [
    body("dog_id")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isInt().withMessage("El campo debe de ser un valor entero!")
]

module.exports = validators;