const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventoShema = new Schema({
  //macronutriente siendo manipulado:
  macronutriente: {
    type: Schema.Types.ObjectId,
    ref: "DistribucionMacros",
  },
  //Usuario responsable de la accion:
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  accion: {
    type: String,
    enum: [
      "agregar alimento",
      "eliminar alimento",
      "editar alimento",
      "agregar receta",
      "eliminar receta",
      "editar receta",
    ],
    required: true,
  },
  //El siguiente campo es necesario?
  //valor: {type: Number, required:[true, "es necesario indicar el nuevo valor"]}
});

const Evento = mongoose.model("Evento", eventoShema);
module.exports = Evento;
