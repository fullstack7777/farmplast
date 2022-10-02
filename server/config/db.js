const mysql = require('mysql')

const db = mysql.createPool({
    host: "213.139.209.67",
    user: "opencartr1",
    password: "PDT3gHQ&",
    database:"opencart"
})

module.exports = db;