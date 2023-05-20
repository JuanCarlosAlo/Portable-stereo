const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");

const controller = {};

controller.getAllSongs = async (req, res) => {
  const autentifiedUser = await UserModel.find();
  try {
    console.log(autentifiedUser, req.params.id);
    res.status(200).send(autentifiedUser);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};
controller.getAllSongsWithUser = async (req, res) => {
  const allSongs = await UserModel.find();
  const user = await UserModel.findById(req.params.id);
  try {
    res.status(200).send({ allSongs, user });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

module.exports = controller;
