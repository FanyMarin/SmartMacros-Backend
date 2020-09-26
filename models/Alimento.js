const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alimentoShema = new Schema(
  {
    Nombre: {
      type: String,
      required: [true, "Es necesario que nombres el alimento"]
    },
    Descripcion: {
      type: String,
    },
    Marca: {
      type: String,
      min: 1,
      max: 50,
    },
    Cantidad: {
      Porcion: {
        type: Number,
        required: true,
      },
      Unidad_de_medida: {
        type: String,
        enum: ["g", "ml"],
      },
    },
    Informacion_nutricional: {
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
      Calorias_kcal: {
        type: Number
      }
    },
    Creador: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "true"
    }
  },
  { timestamps: true }
);

const Alimento = mongoose.model("Alimento", alimentoShema);
module.exports = Alimento;
