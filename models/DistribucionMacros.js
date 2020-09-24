const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const distribucionMacrosSchema = new Schema({
  //Aqui tengo que poner el tipo de dieta?
  Requerimiento_calorico: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  Carbohidratos: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  Proteinas: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  Grasas: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  //Agregar un campo que muestre los macros restantes despues de un registro?
  //Como le hago para que se reinicie cuando cambie de dia?
});

const DistribucionMacros = mongoose.model(
  "DistribucionMacros",
  distribucionMacrosSchema
);
module.exports = DistribucionMacros;
