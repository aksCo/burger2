var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    // NOTE: Be sure to add your MySQL password here!
    password: 'candy',
    database: 'burgers_db',
});

connection.connect(function(err) {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;