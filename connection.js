const mysql = require ('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    passwword: "", 
    database: "test"
})

module.exports = db