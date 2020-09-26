const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registroSchema = new Schema(
  {
    comida1: {
      alimentos_agregados: [
        {
          type: Schema.Types.ObjectId,
          ref: "Alimento",
        },
      ],
      recetas_agregadas: [
        {
          type: Schema.Types.ObjectId,
          ref: "Receta",
        },
      ],
    },
    comida2: {
      alimentos_agregados: [
        {
          type: Schema.Types.ObjectId,
          ref: "Alimento",
        },
      ],
      recetas_agregadas: [
        {
          type: Schema.Types.ObjectId,
          ref: "Receta",
        },
      ],
    },
    comida3: {
      alimentos_agregados: [
        {
          type: Schema.Types.ObjectId,
          ref: "Alimento",
        },
      ],
      recetas_agregadas: [
        {
          type: Schema.Types.ObjectId,
          ref: "Receta",
        },
      ],
    },
    comida4: {
      alimentos_agregados: [
        {
          type: Schema.Types.ObjectId,
          ref: "Alimento",
        },
      ],
      recetas_agregadas: [
        {
          type: Schema.Types.ObjectId,
          ref: "Receta",
        },
      ],
    },
    comida5: {
      alimentos_agregados: [
        {
          type: Schema.Types.ObjectId,
          ref: "Alimento",
        },
      ],
      recetas_agregadas: [
        {
          type: Schema.Types.ObjectId,
          ref: "Receta",
        },
      ],
    },
    creador: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    Macronutrientes_y_cal_restantes: {
      Calorias: Number,
      Carbohidratos: Number,
      Proteinas: Number,
      Grasas: Number,
    },
    // macronutrientes_restantes: {
    //   type: Schema.Types.ObjectId,
    //   ref: "DistribucionMacros", //O debe hacer referencia a evento?
    // },
  },
  { timestamps: true }
);

const Registro = mongoose.model("Registro", registroSchema);
module.exports = Registro;
