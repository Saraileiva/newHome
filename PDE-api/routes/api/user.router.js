const express = require("express");
const router = express.Router();

const ROLES = require("./../../data/roles.json");

const userController = require("../../controllers/user.controller")

const userValidators = require("../../validators/user.validators");
const runValidations = require("../../validators/index.middleware");

const { authentication, authorization } = require("../../middlewares/auth.middlewares");

router.get("/",
    authentication,
    authorization(ROLES.ADMINISTRSTOR),
    userController.getAllUsers
);

router.get("/searchId",
    authentication,
    authorization(ROLES.ADMINISTRSTOR),
    userValidators.findById,
    runValidations,
    userController.findById
);

router.post("/update",
    authentication,
    authorization(ROLES.SYSADMIN),
    userValidators.updateUserRol,
    runValidations,
    userController.updateUserRol
)

router.post("/editProfile",
    authentication,
    userValidators.updateProfile,
    runValidations,
    userController.updateProfile
)

router.delete("/delete",
    authentication,
    authorization(ROLES.SYSADMIN),
    userValidators.deleteUser,
    runValidations,
    userController.deleteUser
)

module.exports = router;