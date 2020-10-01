const express = require("express");
const router = express.Router();
const DistribucionMacros = require("../models/DistribucionMacros");
const User = require("../models/User");
const { verifyToken } = require("../utils/auth");

//Obtener parametros del usuario, calcular distribucion de macros y crear nuevo doc con esa info
router.post("/", verifyToken, (req, res) => {
  const { _id } = req.user;
  User.findById(
    _id,
    "sexo edad altura_cm peso_kg nivel_de_actividad objetivo numero_de_comidas tipo_de_dieta"
  )
    .then((UserParametros) => {
      // let UserParametros = UserParametrosJSON.toObject();
      console.log(UserParametros);
      let sexo = UserParametros.sexo;
      let edad = UserParametros.edad;
      let nivelDeActividad = UserParametros.nivel_de_actividad;
      let objetivo = UserParametros.objetivo;
      let tipoDeDieta = UserParametros.tipo_de_dieta;
      let numeroDeComidas = UserParametros.numero_de_comidas;
      let req_cal = 0;
      let carbs;
      let proteina;
      let grasas;
      let carbsPorComida;
      let proteinaPorComida;
      let grasasPorComida;
      let metabolismoBasal = 0;
      let caloriasMantenimiento = 0;

      //Para obtener el metabolismo basal de acuerdo al sexo
      if (sexo == "Femenino") {
        metabolismoBasal += parseInt(
          10 * UserParametros.peso_kg +
            6.25 * UserParametros.altura_cm -
            5 * edad +
            5
        );
      } else {
        metabolismoBasal +=
          10 * UserParametros.peso_kg +
          6.25 * UserParametros.altura_cm -
          5 * edad -
          161;
      }

      //Para obtener la ingesta de calorias diaria de acuerdo al nivel de actividad
      switch (nivelDeActividad) {
        case "Bajo":
          caloriasMantenimiento = Math.floor(metabolismoBasal * 1.2);
          break;
        case "Moderado":
          caloriasMantenimiento = Math.floor(metabolismoBasal * 1.375);
          break;
        case "Alto":
          caloriasMantenimiento = Math.floor(metabolismoBasal * 1.55);
          break;
        case "Muy Alto":
          caloriasMantenimiento = Math.floor(metabolismoBasal * 1.725);
          break;
        case "Hiperactivo":
          caloriasMantenimiento = Math.floor(metabolismoBasal * 1.9);
          break;
      }

      //Para obtener la ingesta de calorias de acuerdo al objetivo del usuario:
      switch (objetivo) {
        case "Perder peso": //20% menos calorias
          req_cal = Math.floor(
            caloriasMantenimiento - caloriasMantenimiento / 5
          );
          break;
        case "Perder peso lentamente": //10% menos calorias
          req_cal = Math.floor(
            caloriasMantenimiento - caloriasMantenimiento / 10
          );
          break;
        case "Mantener peso":
          req_cal = Math.floor(caloriasMantenimiento);
          break;
        case "Aumentar peso lentamente": //15% mas calorias
          req_cal = Math.floor(
            caloriasMantenimiento + (3 * caloriasMantenimiento) / 20
          );
          break;
        case "Aumentar peso": //25% mas calorias
          req_cal = Math.floor(
            caloriasMantenimiento + caloriasMantenimiento / 4
          );
          break;
      }

      //Para obtener la distribucion de macronutrientes de acuerdo a la dieta que se haya elegido
      switch (tipoDeDieta) {
        case "Estandar": //50%C, 20%P, 30%G
          carbs = Math.floor(req_cal / 2 / 4);
          proteina = Math.floor(req_cal / 5 / 4);
          grasas = Math.floor((3 * req_cal) / 10 / 9);
          break;
        case "Equilibrada": //50%C, 25%P, 25%G
          carbs = Math.floor(req_cal / 2 / 4);
          proteina = Math.floor(req_cal / 4 / 4);
          grasas = Math.floor(req_cal / 4 / 9);
          break;
        case "Baja en grasas": //60%C, 25%P, 15%G
          carbs = Math.floor((6 * req_cal) / 10 / 4);
          proteina = Math.floor(req_cal / 4 / 4);
          grasas = Math.floor((3 * req_cal) / 20 / 9);
          break;
        case "Alta en proteinas": //25%C, 40%P, 35%G
          carbs = Math.floor(req_cal / 4 / 4);
          proteina = Math.floor((2 * req_cal) / 5 / 4);
          grasas = Math.floor((7 * req_cal) / 20 / 9);
          break;
        case "Cetogenica": //5%C, 30%P, 65%G
          carbs = Math.floor(req_cal / 20 / 4);
          proteina = Math.floor((3 * req_cal) / 10 / 4);
          grasas = Math.floor((13 * req_cal) / 20 / 9);
          break;
      }

      //Distribucion de macronutrientes por cuantas comidas tenga el usuario al dia
      switch (numeroDeComidas) {
        case 1:
          carbsPorComida = carbs;
          proteinaPorComida = proteina;
          grasasPorComida = grasas;
          break;
        case 2:
          carbsPorComida = Math.floor(carbs / 2);
          proteinaPorComida = Math.floor(proteina / 2);
          grasasPorComida = Math.floor(grasas / 2);
          break;
        case 3:
          carbsPorComida = Math.floor(carbs / 3);
          proteinaPorComida = Math.floor(proteina / 3);
          grasasPorComida = Math.floor(grasas / 3);
          break;
        case 4:
          carbsPorComida = Math.floor(carbs / 4);
          proteinaPorComida = Math.floor(proteina / 4);
          grasasPorComida = Math.floor(grasas / 4);
          break;
        case 5:
          carbsPorComida = Math.floor(carbs / 5);
          proteinaPorComida = Math.floor(proteina / 5);
          grasasPorComida = Math.floor(grasas / 5);
          break;
      }

      DistribucionMacros.create({
        Metabolismo_basal: metabolismoBasal,
        Calorias_de_mantenimiento: caloriasMantenimiento,
        Calorias_por_objetivo: req_cal,
        Carbohidratos: carbs,
        Proteinas: proteina,
        Grasas: grasas,
        Carbohidratos_por_comida: carbsPorComida,
        Proteinas_por_comida: proteinaPorComida,
        Grasas_por_comida: grasasPorComida,
        usuario: _id,
      })
        .then((doc) => {
          res.status(201).json({
            result: doc,
          });
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    })
    .catch((err) => res.status(400).json(err));
});

//Obtener mi distribucion de macros
router.get("/", verifyToken, (req, res) => {
  const { _id } = req.user;
  DistribucionMacros.find({ usuario: _id })
    .then((miDistribucion) => {
      res.status(200).json({
        result: miDistribucion,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Como hacer para que cuando la informacion del usuario se actualice, automaticamente se
//actualice la distribucion de macro nutrientes tambien?

//Para hacer que se cree la distribucion de macros automaticamente, tengo que usar una promesa?
//Lo mismo para el update?
module.exports = router;
