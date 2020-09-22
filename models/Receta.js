//Necesito arreglar este modelo, porque en la parte de ingredientes solo puedo poner un array de 
//strings y quiero poner un array de objetos, en donde cada objeto tenga 
//1) el nombre del ingrediente
//2) la unidad de medida
//3) y la cantidad del ingrediente. 
//Es como el modelo de "Alimento?". Sera que tengo que referenciar ese modelo en este?

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
    ingredientes: {
        //como le hago para dar a elegir el agregar un ingrediente creado por el propio usuario
        // o uno de la API?
        //como le hago para agregar mas de un ingrediente? Para que me de la opcion de crear varios ingredientes
        type: [String],
        required: [true, "Es necesario agregar los ingredientes para crear una receta"]
    },
    pasos: {
        type: [String],
        //como le hago para agregar mas de un paso? Para que me de la opcion de crear varios pasos
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
