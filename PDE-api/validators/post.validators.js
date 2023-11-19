const { body } = require("express-validator");

const validators = {};

validators.createPostValidator = [
    body("publication_tittle")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El campo debe de ser una cadena de texto!")
        .isLength({ min: 20, max: 255 }).withMessage("El campo requiere como mínimo 20 caracteres y máximo de 255!"),
    body("publication_description")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El campo debe de ser una cadena de texto!")
        .isLength({ min: 20, max: 255 }).withMessage("El campo requiere como mínimo 20 caracteres y máximo de 255!"),
    body("contact_information")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El campo debe de ser una cadena de texto!")
        .isLength({ min: 20, max: 255 }).withMessage("El campo requiere como mínimo 20 caracteres y máximo de 255!"),
    body("dog_id")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isInt().withMessage("El campo debe de ser un valor entero!"),
    body("email_contact")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isEmail().withMessage("El campo debe de tener formato de correo example@example.com!"),
    body("aditional_info")
        .notEmpty().withMessage("El campo no puede estar vacío!")
]

validators.findByUserId = [
    body("user_id")
        .notEmpty().withMessage("Debes ingresar el id del usuario para realizar la busqueda")
        .isInt().withMessage("El campo debe de ser un valor entero!")
]

validators.findOneByDogId = [
    body("dog_id")
        .notEmpty().withMessage("Debes ingresar el id del perro para realizar la busqueda")
        .isInt().withMessage("El campo debe de ser un valor entero!")
]

validators.updatePost = [
    body("publication_id")
        .notEmpty().withMessage("Debes ingresar el id de la publicación para realizar poder eliminarlo!")
        .isInt().withMessage("El campo debe de ser un valor entero!"),
    body("publication_description")
        .notEmpty().withMessage("El campo no puede estar vacío!")
        .isString().withMessage("El campo debe de ser una cadena de texto!")
        .isLength({ min: 20, max: 255 }).withMessage("El campo requiere como mínimo 20 caracteres y máximo de 255!")
]

validators.delete = [
    body("publication_id")
        .notEmpty().withMessage("Debes ingresar el id de la publicación para realizar poder eliminarlo!")
        .isInt().withMessage("El campo debe de ser un valor entero!")
]

module.exports = validators;