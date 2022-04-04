const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const conn = require("./db/conn").run
const employeeRouters = require("./routes/employeeRoutes")

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static("public"));
// esta variável abaixo, simula como se fosse um banco de dados de funcionários

app.use (express.urlencoded({extended: true}))
app.use (express.json())
app.use ("/", employeeRouters)

app.listen(3000);
