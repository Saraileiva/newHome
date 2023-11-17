const express = require("express");
const router = express.Router();

const ROLES = require("./../../data/roles.json");

const postController = require("../../controllers/post.controller")

const postValidators = require("../../validators/post.validators");
const runValidations = require("../../validators/index.middleware");

const { authentication, authorization } = require("../../middlewares/auth.middlewares");

// Get all posts
router.get("/",
    authentication,
    postController.getAllPosts
);

// Get posts by users
router.get("/byuserid",
    authentication,
    postValidators.findByUserId,
    runValidations,
    postController.findByUserId
);

// Get posts by dog
router.get("/bydogid",
    authentication,
    postValidators.findOneByDogId,
    runValidations,
    postController.findOneByDogId
);

//Create post
router.post("/add", 
    authentication,
    authorization(ROLES.ADMINISTRSTOR),
    postValidators.createPostValidator,
    runValidations,
    postController.create
);

router.post("/update",
    authentication,
    authorization(ROLES.ADMINISTRSTOR),
    postValidators.updatePost,
    runValidations,
    postController.updateDescription
)

//Delete post
router.delete("/delete", 
    authentication,
    authorization(ROLES.ADMINISTRSTOR),
    postValidators.delete,
    runValidations,
    postController.delete
);



module.exports = router;

