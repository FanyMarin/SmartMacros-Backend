//No estoy segura de como hacer este modelo.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registroSchema = new Schema(
  {
    comida1: {
      //crear boton de a;adir alimento que me lleve directamente a la API de alimentos
      //a una interfaz que me permita filtrar los alimentos que hay
      //aqui tengo que hacer una ruta que me devuelva solo el nombre del alimento
      type: [String],
      required: true,
    },
    comida2: {
        type: [String],
    },
    comida3: {
        type: [String],
    },
    comida4: {
        type: [String],
    },
    comida5: {
        type: [String],
    },
  },
  { timestamps: true }
);

const Registro = mongoose.model("Registro", registroSchema);
module.exports = Registro;
