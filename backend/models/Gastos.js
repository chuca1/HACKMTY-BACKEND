const { model, Schema } = require("mongoose");

const gastosSchema = new Schema(
  {
    rfc: String,
    uuid: String,
    ccyisocode: String,
    ccyfx: Number,
    paymentmethod: Number,
    paymenttype: String,
    subtotal: Number,
    total: Number,
    placegenerated: Number,
    date: Date,
    receptorname: String,
    emisorrfc: String,
    emisorname: String,
    status: String,
    productid: Number,
    quantity: Number,
    cost: Number
  },
  {
    versionKey: false,
    timestamps: true
  }
);
const Gastos = model("Gastos", gastosSchema);

module.exports = Gastos;
