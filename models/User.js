const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre de usuario es necesario"],
    },
    email: {
      type: String,
      required: [true, "El correo electronico es requerido"],
      validate: {
        message: "El email ya esta en uso",
        validator: async (email) => {
          const items = await mongoose.models["User"].count({ email });
          return items < 1;
        },
      },
    },
    password: {
      type: String,
      required: [true, "La contrase;a es necesaria para continuar"],
    },
    sexo: {
      type: String,
      enum: ["Femenino", "Masculino"],
      required: [true, "Es necesario seleccionar tu genero"],
    },
    edad: {
      type: Number,
      min: 15,
      max: 75,
      required: [true, "Es necesario que proporciones tu edad"],
    },
    altura_cm: {
      type: Number,
      min: 50,
      max: 200,
      required: [
        true,
        "Es necesario que proporciones tu estatura (en centimetros)",
      ],
    },
    peso_kg: {
      type: Number,
      min: 20,
      max: 500,
      required: [true, "Es necesario que proporciones tu peso (en kilogramos)"],
    },
    nivel_de_actividad: {
      type: String,
      enum: ["Bajo", "Moderado", "Alto", "Muy alto", "Hiperactivo"],
      required: [
        true,
        "Es necesario que especifiques tu nivel de actividad diaria",
      ],
    },
    objetivo: {
      type: String,
      enum: [
        "Perder peso",
        "Perder peso lentamente",
        "Mantener peso",
        "Aumentar peso lentamente",
        "Aumentar peso",
      ],
      required: [true, "Es necesario que especifiques tu objetivo"],
    },
    numero_de_comidas: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: [
        true,
        "Es necesario que especifiques el numero de comidas que tienes al dia",
      ],
    },
    tipo_de_dieta: { 
      type: String,
      enum: [
        "Estandar",
        "Equilibrada",
        "Baja en grasas",
        "Alta en proteinas",
        "Cetogenica",
      ],
      required: [
        true,
        "Es necesario que especifiques el tipo de dieta que quieres seguir",
      ],
    },
    foto_de_perfil: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;