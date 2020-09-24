const express = require("express");
const router = express.Router();
const Registro = require("../models/Registro");

//Rutas que necesito:
//1) Necesito una que me permita crear un nuevo registro y restar a distrib de macros lo que se haya registrado

//1) Crear nuevo registro: Aqui falta que se traiga ingredientes de la base de datos de alimentos
//-receta y no que solo sean strings
router.post("/nuevo-registro", (req, res) => {
  Registro.create({ ...req.body })
    .then((registro) => {
      res.status(201).json({
        result: registro,
      });
    })
    .catch((err) => res.status(400).json(err));
});

//2)Obtener los registros de un usuario en concreto:
router.get("/mis-registros", (req, res) => {
  //const = { _id } = req.user;
  const _id = "5f6c0cd3fb9763476118d92d";
  Registro.find({ creador: _id })
    .then((registros) => {
      res.status(200).json({
        result: registros,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//3)Obtener los detalles de un registro en particular:
router.get("/mis-registros/:id", (req, res) => {
  const { id } = req.params;
  Registro.findById(id)
    .then((registro) => {
      res.status(200).json({
        result: registro,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//4) Actualizar registro: ---> Aqui falta que se pueda actualizar, ya sea la cantidad del mismo
//alimento/receta o que se cambie por otro (y por lo tanto, se traiga ese otro alimento/receta 
//de la base de datos de alimentos/receta)
router.patch("/actualizar/:id", (req, res) => {
  const { id } = req.params;
  Registro.findByIdAndUpdate(id, req.body, { new: true })
    .then((registroActualizado) => {
      res.status(200).json({
        result: registroActualizado,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//5) Eliminar registro:
router.delete("/eliminar/:id", (req, res) => {
  const { id } = req.params;
  Registro.findByIdAndRemove(id)
    .then((registro) => {
      res.status(200).json({
        result: registro,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
