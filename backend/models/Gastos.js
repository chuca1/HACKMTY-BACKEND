const { model, Schema } = require("mongoose");

const gastosSchema = new Schema(
  {},
  {
    versionKey: false,
    timestamps: true
  }
);
const Gastos = model("Gastos", gastosSchema);

module.exports = Gastos;
