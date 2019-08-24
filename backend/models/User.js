const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    password: String,
    profit: Number,
    gastos: Number,
    ingresos: Number
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const User = model("User", userSchema);

module.exports = User;
