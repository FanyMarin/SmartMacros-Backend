const express = require("express");
const router = express.Router();
const Alimento = require("../models/Alimento");
const { verifyToken } = require("../utils/auth");

//NECESITO:
//7) Poder obtener alimentos de una base de datos externa, eso se hace aqui mismo o en otro archivo?

//1) Obtener todos los alimentos de la coleccion:
router.get("/", verifyToken, (req, res) => {
  Alimento.find({}, "Nombre")
    .then((alimentos) => {
      res.status(200).json({
        result: alimentos,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//2) Obtener los alimentos de un usuario en especifico:
router.get("/mis-alimentos", verifyToken, (req, res) => {
  const { _id } = req.user;
  Alimento.find({ Creador: _id }, "Nombre")
    .then((alimentos) => {
      res.status(200).json({
        result: alimentos,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//3) Obtener un alimento en especifico, con todos sus detalles:
router.get("/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  Alimento.findById(id)
    .then((alimento) => {
      res.status(200).json({ result: alimento });
    })
    .catch((err) => res.status(400).json(err));
});

//4)Crear un nuevo alimento:
router.post("/crear-alimento", verifyToken, (req, res) => {
  const { _id: Creador } = req.user;
  const alimento = {...req.body, Creador}
  Alimento.create(alimento)
    .then((alimento) => {
      res.status(201).json({ result: alimento });
    })
    .catch((err) => res.status(400).json(err));
});

//5) Actualizar un alimento:
router.patch("/actualizar/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  Alimento.findByIdAndUpdate(id, req.body, { new: true })
    .then((alimentoActualizado) =>
      res.status(200).json({ result: alimentoActualizado })
    )
    .catch((err) => res.status(400).json(err));
});

//6) Eliminar un alimento:
router.delete("/eliminar/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  Alimento.findByIdAndRemove(id)
    .then((alimentoEliminado) => {
      res.status(200).json({ result: alimentoEliminado });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
