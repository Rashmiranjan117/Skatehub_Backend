const express = require("express");

const authRouter = express.Router();
const authController = require("../controller/auth.controller");

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
// authRouter.delete("/:id", authController.delete);

module.exports = { authRouter };
