const express = require("express");
const router = express.Router();

const dogController = require("../../controllers/dog.controller");

const dogValidators = require("../../validators/dog.validators");
const runValidations = require("../../validators/index.middleware");

const ROLES = require("./../../data/roles.json");

const { authentication, authorization } = require("../../middlewares/auth.middlewares");

router.get("/",
    authentication,
    dogController.getAllDogs
);

router.get("/searchId",
    authentication,
    dogValidators.findById,
    runValidations,
    dogController.findById
);

router.post("/create",
    authentication,
    authorization(ROLES.ADMINISTRSTOR),
    dogValidators.createDog,
    runValidations,
    dogController.createDog
)

router.post("/update",
    authentication,
    authorization(ROLES.ADMINISTRSTOR),
    dogValidators.updateDogAge,
    runValidations,
    dogController.updateDogAge
)

router.delete("/delete",
    authentication,
    authorization(ROLES.ADMINISTRSTOR),
    dogValidators.deleteUser,
    runValidations,
    dogController.deleteDog
)

module.exports = router;