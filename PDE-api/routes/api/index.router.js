const express = require("express");
const router = express.Router();

//Importar todos los enrutadores
const postRouter = require("./post.router");
const authUser = require("./auth.router");
const userRouter = require("./user.router");
const dogRouter = require("./dog.router");

//Definir las rutas
router.use("/post", postRouter);
router.use("/auth", authUser);
router.use("/user", userRouter);
router.use("/dog", dogRouter);

module.exports = router;