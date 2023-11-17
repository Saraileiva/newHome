const express = require("express");
const router = express.Router();

const authController = require("../../controllers/auth.controller");

const authValidators = require("../../validators/auth.validators");
const runValidations = require("../../validators/index.middleware");

const { authentication } = require("../../middlewares/auth.middlewares");

router.post("/signup",
    authValidators.registerValidator,
    runValidations,
    authController.Register
)

router.post("/signin",
    authValidators.loginValidator,
    runValidations,
    authController.Login
)

/*router.post("/delete",
    authController.deleteUser
)*/

router.get("/whoami",
    authentication,
    authController.whoami
)

module.exports = router;

