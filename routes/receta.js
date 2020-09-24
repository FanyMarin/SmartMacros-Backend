const express = require("express");
const router = express.Router();
const Receta = require("../models/Receta");

//Necesito:
//1) Poder obtner todas las recetas creadas por un usuario ---> Funcional
//2) De todas esas, poder obtener una en especifico ---> Funcional
//3) Que un usuario pueda crear una receta ---> Funcional, pero no como lo quiero
//4) Poder actualizar una receta ---> Funcional
//5) Poder eliminar esa receta ---> Funcional
//6) Poder traerme todas las recetas de un usuario en particular

//1) Poder obtner todas las recetas creadas
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

//2) De todas esas, poder obtener una en especifico
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

//3) Que un usuario pueda crear una receta
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

//4) Poder actualizar una receta
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

//5) Poder eliminar esa receta
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
