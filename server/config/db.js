const mysql = require('mysql')

const db = mysql.createPool({
    host: "erumyrg1.beget.tech",
    user: "erumyrg1_erumyrg",
    password: "PDT3gHQ&",
    database:"erumyrg1_erumyrg"
})

module.exports = db;