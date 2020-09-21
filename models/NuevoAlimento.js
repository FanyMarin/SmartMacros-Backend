const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nuevoAlimentoShema = new Schema(
  {
    Descripcion: {
      type: String,
      required: [true, "Es necesario que describas el alimento"],
    },
    Marca: {
      type: String,
      min: 1,
      max: 50,
    },
    Informacion_nutricional: {
      Porcion: {
        type: Number,
        required: true,
      },
      Unidad_de_medida: {
        type: String,
        enum: ["g", "ml"],
      },
    },
    Calorias_kcal: {
      Grasas: {
        type: Number,
        required: true,
      },
      Carbohidratos: {
        type: Number,
        required: true,
      },
      Proteinas: {
        type: Number,
        required: true,
      },
    },
    Creador: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "true"
    }
  },
  { timestamps: true }
);

const NuevoAlimento = mongoose.model("NuevoAlimento", nuevoAlimentoShema);
module.exports = NuevoAlimento;
