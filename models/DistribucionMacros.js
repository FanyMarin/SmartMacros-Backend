const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const distribucionMacrosSchema = new Schema({
  Requerimiento_calórico: {
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
});

const DistribucionMacros = mongoose.model(
  "DistribucionMacros",
  distribucionMacrosSchema
);
module.exports = DistribucionMacros;
