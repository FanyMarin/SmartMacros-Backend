const express = require("express");
const router = express.Router();
const Receta = require("../models/Receta");

//Para obtener todas las recetas que existan
// router.get("/", (req, res) => {
//   Receta.find()
//     .then((recetas) => {
//       res.status(200).json({
//         result: recetas,
//       });
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });



module.exports = router;
