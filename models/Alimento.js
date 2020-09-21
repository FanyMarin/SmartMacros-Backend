//Este modelo es necesario?

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alimentoShema = new Schema({
    Alimento: {
        porcion_en_gr: {
            type: Number,
            required: true
        },
    
    }
})

const Alimento = mongoose.model("Alimento", alimentoShema);
module.exports = Alimento;