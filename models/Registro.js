const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registroSchema = new Schema(
  {
    alimentos_agregados: [
      {
        type: Schema.Types.ObjectId,
        ref: "Alimento",
      },
    ],

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
