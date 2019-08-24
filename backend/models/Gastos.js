const { model, Schema } = require("mongoose");

const gastosSchema = new Schema(
  {
    monto: Number,
    descripcion: String,
    categoria: String,
    fecha: Date,
    userid: Number
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const Gastos = model("Gastos", gastosSchema);

module.exports = Gastos;
