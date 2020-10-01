const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//1) signup
router.post("/signup", (req, res) => {
  const { password, ...userValues } = req.body;
  bcrypt.hash(password, 10).then((hashedPassword) => {
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
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (user === null) return res.status(404).json({ msg: "Email no existe" });

    bcrypt.compare(password, user.password).then((match) => {
      if (match) {
        const userObject = user.toObject();
        delete userObject.password;
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
