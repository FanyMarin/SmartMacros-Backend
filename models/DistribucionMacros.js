const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const distribucionMacrosSchema = new Schema({
  Requerimiento_calorico: {
    Metabolismo_basal: {
      type: Number,
    },
    Calorias_de_mantenimiento: {
      type: Number,
    },
    Calorias_por_objetivo: {
      type: Number,
    },
  },
  Carbohidratos: {
    type: Number,
  },
  Proteinas: {
    type: Number,
  },
  Grasas: {
    type: Number,
  },
  Macronutrientes_por_comida: {
    Carbohidratos: Number,
    Proteinas: Number,
    Grasas: Number,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const DistribucionMacros = mongoose.model(
  "DistribucionMacros",
  distribucionMacrosSchema
);
module.exports = DistribucionMacros;
