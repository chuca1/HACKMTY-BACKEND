const { model, Schema } = require("mongoose");

const ingresosSchema = new Schema(
  {},
  {
    versionKey: false,
    timestamps: true
  }
);
const Ingresos = model("Ingresos", ingresosSchema);

module.exports = Ingresos;
