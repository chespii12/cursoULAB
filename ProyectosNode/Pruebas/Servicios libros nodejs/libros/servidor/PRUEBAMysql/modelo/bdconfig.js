const mysql = require('mysql');
let conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "biblioteca"
});

module.exports = conexion;