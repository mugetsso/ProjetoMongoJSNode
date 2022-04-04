const { required } = require("nodemon/lib/config");

const express = require("express")
const router = express.Router();

const EmployeeController = require("../controllers/employeeController")

//agora vem as páginas ou rotas da aplicação
router.get("/", EmployeeController.showEmployees)
router.get("/create",EmployeeController.createEmployee)
router.post("/create", EmployeeController.createEmployeePost)

module.exports = router