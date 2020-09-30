const express = require("express");
const router = express.Router();
const Receta = require("../models/Receta");
const Alimento = require("../models/Alimento");
const { verifyToken } = require("../utils/auth")

//1) Obtener todas las recetas de la coleccion
router.get("/", verifyToken, (req, res) => {
  Receta.find({}, "Nombre Cantidad")
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
router.get("/mis-recetas", verifyToken, (req, res) => {
  const { _id } = req.user;
  Receta.find({ creador: _id }, "Nombre Cantidad")
    .then((recetas) => {
      res.status(200).json({
        result: recetas,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//3) Obtener una receta en especifico con todos sus detalles
router.get("/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  Receta.findById(id)
    .populate("Ingredientes", "Nombre")
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
router.post("/crear-receta", verifyToken, (req, res) => {
  const { _id: creador } = req.user;
  const receta = {...req.body, creador}
  Receta.create(receta)
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
router.patch("/actualizar/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  Receta.findByIdAndUpdate(id, req.body, { new: true })
    .populate("Ingredientes", "Nombre")
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
router.delete("/eliminar/:id", verifyToken, (req, res) => {
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
