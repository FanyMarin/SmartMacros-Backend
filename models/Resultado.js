//Creo que este modelo no es necesario porque no son documentos que
//se puedan llenar con una forma, solo es informacion que sera
//mostrada al usuario en un formato en especifico

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultadoSchema = new Schema(
  {
    Metabolismo_basal_en_kcal: {
      type: Number,
      required: true,
    },
    Indice_de_masa_corporal: {
      type: Number,
      required: true,
    },
    Requerimiento_calorico_diario: {
      type: Number,
      required: true,
    },
    Usuario: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Resultado = mongoose.model("Resultado", resultadoSchema);
module.exports = Resultado;
