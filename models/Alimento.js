//Este modelo es necesario?

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alimentoShema = new Schema({
        nombre: {
            type: String,
            required: true
        },
        unidad_de_medida: {
            type: String,
            enum: ["g", "ml"],
            required: true
        },
        porcion: {
            type: Number,
            required: true
        },
})

const Alimento = mongoose.model("Alimento", alimentoShema);
module.exports = Alimento;