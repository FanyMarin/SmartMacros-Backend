const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const distribucionMacrosSchema = new Schema({
  //Resultados del usuario:
  Metabolismo_basal: Number,
  Calorias_de_mantenimiento: Number,
  Calorias_por_objetivo: Number,

  //Macronutrientes por objetivo:
  Carbohidratos: Number,
  Proteinas: Number,
  Grasas: Number,

  //Macronutrientes por comida:
  Carbohidratos_por_comida: Number,
  Proteinas_por_comida: Number,
  Grasas_por_comida: Number,

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
