const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alimentoShema = new Schema(
  {
    Nombre: {
      type: String,
      required: [true, "Es necesario que nombres el alimento"],
    },
    Descripcion: {
      type: String,
    },
    Marca: {
      type: String,
      min: 1,
      max: 50,
    },
    Porcion: {
      type: Number,
      required: true,
    },
    Unidad_de_medida: {
      type: String,
      enum: ["gr", "ml"],
      required: true,
    },
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
      type: Number,
      required: true,
    },
    Creador: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "true",
    },
  },
  { timestamps: true }
);

const Alimento = mongoose.model("Alimento", alimentoShema);
module.exports = Alimento;
