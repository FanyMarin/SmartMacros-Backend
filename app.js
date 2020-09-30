require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

//configuracion del cors
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
}))

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/build")));

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const alimentoRouter = require("./routes/alimento");
const recetaRouter = require("./routes/receta");
const registroRouter = require("./routes/registro");
const distribucionMacrosRouter = require("./routes/distribucionMacros");

app.use("/api/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/alimentos", alimentoRouter);
app.use("/api/recetas", recetaRouter);
app.use("/api/registros", registroRouter);
app.use("/api/distribucion-macros", distribucionMacrosRouter);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/build","index.html"));
});

module.exports = app;