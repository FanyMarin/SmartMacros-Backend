const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recetaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "Es necesario que nombres la receta"],
    },
    informacion_nutricional: {
        Porcion: {
          type: Number,
          required: true,
        },
        Unidad_de_medida: {
          type: String,
          enum: ["g", "ml", "contenedor"],
        },
      },
    descripcion: {
        type: String,
        min: 1,
        max: 200,
    },
    ingredientes: [{
        type: Schema.Types.ObjectId,
        ref: "Alimento",
        required: [true, "Es necesario agregar los ingredientes para crear una receta"]
    }],
    pasos: {
        type: [String],
    },
    creador: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "true"
    }
  },
  { timestamps: true }
);

const Receta = mongoose.model("Receta", recetaSchema);
module.exports = Receta;
