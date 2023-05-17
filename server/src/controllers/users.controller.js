const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");
const controller = {};

controller.createUser = async (req, res) => {
  console.log(re.body);
  const alreadyUserName = await UserModel.findOne({
    userName: re.body.userName,
  });
  if (alreadyUserName) {
    return res.status(409).send("User name already exist");
  }
  const {
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
    _id: v4(),
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
};

module.exports = controller;
