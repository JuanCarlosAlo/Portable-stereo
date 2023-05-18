const express = require("express");
const usersRoutes = express.Router();
const controller = require("../controllers/users.controller");

usersRoutes.post("/new-user", controller.createUser);
usersRoutes.get("/", controller.getUsers);
usersRoutes.post("/user-validation", controller.userValidation);

module.exports = usersRoutes;
