const mysql = require('mysql2');
const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Whatever1!',
        database: 'employees_db'
    });



module.exports = connection;