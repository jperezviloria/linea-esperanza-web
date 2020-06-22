const express = require('express');
const cors = require("cors");
const path = require("path")
const app = express();



// settings

app.set("port", process.env.PORT || 7000);

// middlewares

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend", "build")))


// routes

app.use("/formulario", require("./routes/pacientes"));


module.exports = app;