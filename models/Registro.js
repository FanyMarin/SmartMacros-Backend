const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registroSchema = new Schema(
  {
    comida1: [
      {
        type: Schema.Types.ObjectId,
        ref: "Alimento",
      },
    ],
    comida2: [
      {
        type: Schema.Types.ObjectId,
        ref: "Alimento",
      },
    ],
    comida3: [
      {
        type: Schema.Types.ObjectId,
        ref: "Alimento",
      },
    ],
    comida4: [
      {
        type: Schema.Types.ObjectId,
        ref: "Alimento",
      },
    ],
    comida5: [
      {
        type: Schema.Types.ObjectId,
        ref: "Alimento",
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Registro = mongoose.model("Registro", registroSchema);
module.exports = Registro;
