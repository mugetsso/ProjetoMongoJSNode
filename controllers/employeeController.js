const res = require('express/lib/response')
const Employee = require('../models/employee')

module.exports = class EmployeeController {
    static async showEmployees(req, resp){
        const employees = await Employee.getEmployees()

        res.render("employees/all", {employees})

    }
    static createEmployee (req, res){
        res.render("employees/create")
    }
    static createEmployeePost (req, res){
        const name= req.body.bookname
        const department= req.body.bookprice
    
        const employee= new Employee(bookname,bookprice)
        employee.save()
        res.redirect("/")
    }
    
}