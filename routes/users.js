var express = require('express');
var router = express.Router();

//Para las rutas de usuario
//1) Necesito poder crear un nuevo usuario
//2) Necesito poder actualizar la informacion del usuario
//3) Necesito poder eliminar al usuario?

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
