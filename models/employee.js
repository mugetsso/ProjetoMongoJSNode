const conn = require("../db/conn")

class Employee {
    constructor(bookname, bookprice, salary){
        this.bookname= bookname
        this.bookprice= bookprice
    }
    //método para salvar os dados
    save(){
        const employee = conn.db().collection("employees").insertOne({
            nambooknamee: this.bookname,
            bookprice: this.bookprice,
        })
        return employee
        }   static getEmployees(){
            const employees = conn.db().collection("employees").find().toArray()

            return employees
    }
}
module.exports = Employee