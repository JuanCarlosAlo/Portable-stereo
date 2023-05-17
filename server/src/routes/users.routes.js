const express = require("express");
const usersRoutes = express.Router();
const controller = require("../controllers/users.controller");

usersRoutes.post("/new-user", controller.createUser);

module.exports = usersRoutes;
