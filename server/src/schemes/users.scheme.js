const mongoose = require("mongoose");

const UsersScheme = mongoose.Schema(
  {
    _id: String,
    email: String,
    userName: String,
    profileImg: String,
    bio: String,
    mixtapes: Array,
    likes: {
      selfLikes: Array,
      othersLikes: Number,
    },
    follows: {
      selfFollows: Array,
      othersFollows: Number,
    },
    uploads: {
      tracksUploads: Array,
      albumsUploads: Array,
    },
  },
  {
    collection: "Users",
  }
);

const UserModel = mongoose.model("Users", UsersScheme);

module.exports = UserModel;
