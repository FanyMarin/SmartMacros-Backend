const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventoShema = new Schema({
    //macronutriente siendo manipulado:
    macronutriente: {
        type: Schema.Types.ObjectId,
        ref: "DistribucionMacros"
    },
    //Usuario responsable de la accion:
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    //tipo_de_dieta: {} => creo que este va en otro modelo
    accion: {
        type: String,
        enum: ["agregar alimento", "eliminar alimento"],
        required: true
    },
    //El siguiente campo es necesario?
    //valor: {type: Number, required:[true, "es necesario indicar el nuevo valor"]}
})

const Evento = mongoose.model("Evento", eventoShema);
module.exports = Evento;