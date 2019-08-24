const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {},
  {
    versionKey: false,
    timestamps: true
  }
);
const User = model("User", userSchema);

module.exports = User;
