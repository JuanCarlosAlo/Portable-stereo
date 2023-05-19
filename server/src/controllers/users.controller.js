const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");

const controller = {};

controller.getUserId = async (req, res) => {
  try {
    const autentifiedUser = await UserModel.findById(req.params.id);
    console.log(autentifiedUser);
    res.status(200).send(autentifiedUser);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createUser = async (req, res) => {
  console.log(req.body);

  const {
    _id,
    email,
    userName,
    profileImg,
    bio,
    mixtapes,
    selfLikes,
    othersLikes,
    selfFollows,
    othersFollows,
    tracksUploads,
    albumsUploads,
  } = req.body;

  const newUser = new UserModel({
    _id,
    email,
    userName,
    profileImg,
    bio,
    mixtapes,
    likes: {
      selfLikes,
      othersLikes,
    },
    follows: {
      selfFollows,
      othersFollows,
    },
    uploads: {
      tracksUploads,
      albumsUploads,
    },
  });
  console.log(newUser);
  await newUser.save();

  res.send("User Register");
};

controller.updateUser = async (req, res) => {
  console.log(req.body);
  try {
    await UserModel.updateOne(
      { _id: req.params._id },
      { $set: { ...req.body } }
    );
  } catch {
    res.status(500).send({ error: "Error" });
  }

  const allUsers = await UserModel.findById(req.params._id);

  res.send(allUsers);
};

module.exports = controller;
