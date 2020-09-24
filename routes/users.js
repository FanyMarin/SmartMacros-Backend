const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Para las rutas de usuario
//1) Necesito poder crear un nuevo usuario (signup) ---> Funcional
//2) Necesito poder hacer login ---> Funcional
//3) Necesito poder hacer logout ---> Funcional
//4) Necesito poder traer la informacion del usuario ---> Funcional
//5) Necesito poder actualizar la informacion del usuario ---> Funcional

//1) signup
router.post("/signup", (req, res) => {
  //Voy a sacar la contrase;a para poder hashearla y guardar los demas campos en una nueva variable
  //llamada userValues, haciendo uso del rest operator
  const { password, ...userValues } = req.body;
  bcrypt.hash(password, 10).then((hashedPassword) => {
    //Voy a crear la variable user, que tiene los valores guardados en el paso anterior y la nueva pw.
    //Aqui los tres puntitos estan actuando como spread operator
    const user = { ...userValues, password: hashedPassword };
    User.create(user)
      .then(() => {
        res.status(201).json({ msg: "Usuario creado con exito" });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

//2) login
router.post("/login", (req, res, next) => {
  //Aqui unicamente necesitamos el email y pw, asi que lo sacamos de req.body
  const { email, password } = req.body;
  //Ahora necesitamos corroborar que el email que me manden exista en mi base de datos:
  User.findOne({ email }).then((user) => {
    if (user === null) return res.status(404).json({ msg: "Email no existe" });

    //Si el email, existe, necesitamos comparar el pw que hay en la base de datos con la proporcionada
    //por el usuario. Esto se hace con el metodo compare de bcrypt, que toma la que proporciono el user
    //como primer parametro y la que tengo en la db como el segundo
    bcrypt.compare(password, user.password).then((match) => {
      //match en un valor booleano
      if (match) {
        //si match=true, tenemos que responderle al usuario con su cookie, su token y al frontend con la
        //informacion de ese usuario
        //Pasamos la instancia del doc de mongoose a un objeto plano de js, para no pasar la pw al frontend
        const userObject = user.toObject();
        //Aqui borramos el pw para precisamente no pasarlo al frontend. Para eso lo convertimos en obj de js
        delete userObject.password;
        //Ahora vamos a crear el token
        const token = jwt.sign({ id: user._id }, process.env.SECRET, {
          expiresIn: "1d",
        });
        res
          .cookie("token", token, {
            expires: new Date(Date.now() + 86400000),
            secure: false,
            httpOnly: true,
          })
          .json({ user: userObject });
      }
    });
  });
});

//3) logout
router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ msg: "logout" });
});

//4) Obtener la informacion del usuario
router.get("/my-info/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      res.status(200).json({
        result: user,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//5) Para actualizar la informacion del usuario:
router.patch("/actualizar/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((user) => {
      res.status(200).json({
        result: user,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


module.exports = router;
