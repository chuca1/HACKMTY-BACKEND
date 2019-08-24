const { model, Schema } = require("mongoose");

const empleadoSchema = new Schema(
  {},
  {
    versionKey: false,
    timestamps: true
  }
);
const Empleado = model("Empleado", empleadoSchema);

module.exports = Empleado;
