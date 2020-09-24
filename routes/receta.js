const express = require("express");
const router = express.Router();
const Receta = require("../models/Receta");

//1) Obtener todas las recetas de la coleccion
router.get("/", (req, res) => {
  Receta.find()
    .then((recetas) => {
      res.status(200).json({
        result: recetas,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//2) Obtener todas las recetas de un usuario en especifico:
router.get("/mis-recetas", (req, res) => {
  //const = { _id } = req.user;
  const _id = "5f6c0cd3fb9763476118d92d"; 
  Receta.find({ creador: _id })
    .then((recetas) => {
      res.status(200).json({
        result: recetas,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//3) Obtener una receta en especifico
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Receta.findById(id)
    .then((receta) => {
      res.status(200).json({
        result: receta,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//4) Crear una receta  ---> Aqui falta que se traiga ingredientes de la base de datos de alimentos
//, no solo sean strings
router.post("/crear-receta", (req, res) => {
  Receta.create({ ...req.body })
    .then((receta) => {
      res.status(201).json({
        result: receta,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//5) Actualizar una receta ---> Aqui falta que se pueda actualizar, ya sea la cantidad del mismo
//alimento o que se cambie por otro (y por lo tanto, se traiga ese otro alimento de la base de
//datos de alimentos)
router.patch("/actualizar/:id", (req, res) => {
  const { id } = req.params;
  Receta.findByIdAndUpdate(id, req.body, { new: true })
    .then((recetaActualizada) => {
      res.status(200).json({
        result: recetaActualizada,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//6) Eliminar una receta
router.delete("/eliminar/:id", (req, res) => {
  const { id } = req.params;
  Receta.findByIdAndRemove(id)
    .then((receta) => {
      res.status(200).json({
        result: receta,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
