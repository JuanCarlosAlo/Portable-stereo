const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");

const controller = {};

controller;

controller.userValidation = async (req, res) => {
  console.log(req.body);
  const alreadyUserName = await UserModel.findOne({
    userName: req.body.userName,
  });
  if (alreadyUserName) {
    return res.status(409).send({ message: "User name already exist" });
  } else res.status(201).send({ message: "Username available" });
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

module.exports = controller;
