const express = require("express");
const router = express.Router();
const Alimento = require("../models/Alimento");

//NECESITO:
//1) Poder obtener todos los alimentos creados por un usuario
//2) Poder crear un alimento
//3) Poder actualizar un alimento
//4) Poder eliminar un alimento.
//5) Poder obtener alimentos de una base de datos externa, eso se hace aqui mismo o en otro archivo?


//Para obtener todos los alimentos: -----> Funcional
//en esta ruta no necesito populate(), porque no necesito referenciar otros documentos ni informacion
//de otros documentos que no sea de la collection "nuevosAlimento"
//Con esta ruta obtengo los alimentos con todas las llaves y los detalles, 
//como puedo hacer para que solo salga su nombre?
router.get("/", (req, res) => {
  Alimento.find()
    .then((alimentos) => {
      res.status(200).json({
        result: alimentos,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Para crear un nuevo alimento: -----> Funcional
//Para esta ruta, vamos a sacar la informacion para crear el nuevo documento de req.body, que es
//la informacion que el cliente manda a traves de un formulario
router.post("/crear-alimento", (req, res) => {
  Alimento.create({ ...req.body })
    .then((alimento) => {
      res.status(201).json({ result: alimento });
    })
    .catch((err) => res.status(400).json(err));
});

//Para traerme un alimento en especifico: ----> Funcional
//Sacamos el id de req.params para poder usarlo
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Alimento.findById(id)
    .then((alimento) => {
      res.status(200).json({ result: alimento });
    })
    .catch((err) => res.status(400).json(err));
});

//Para actualizar un alimento: -----> Funcional
//findByIdAndUpdate toma el id como primer parametro, las actualizaciones que se van a hacer como el
//segundo y { new: true } como tercero, que me devuelve el doc ya actualizado
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Alimento.findByIdAndUpdate(id, req.body, { new: true })
    .then((alimentoActualizado) =>
      res.status(200).json({ result: alimentoActualizado })
    )
    .catch((err) => res.status(400).json(err));
});

//Para eliminar un alimento: -----> Funcional DDDD:
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Alimento.findByIdAndRemove(id)
    .then((alimentoEliminado) => {
      res.status(200).json({ result: alimentoEliminado });
    })
    .catch((err) => res.status(400).json(err));
});
module.exports = router;
