const express = require("express");
const usersRoutes = express.Router();
const controller = require("../controllers/users.controller");

usersRoutes.post("/", controller.createUser);

module.exports = usersRoutes;
