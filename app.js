const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Handlebar
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials", (err) => {});

// Servir contendo estatico
app.use(express.static("public"));

// app.get("/", function (req, res) {
//   res.send("Home page");
// });

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Lalo-Shi",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Lalo-Shi",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Lalo-Shi",
    titulo: "Curso de Node",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
