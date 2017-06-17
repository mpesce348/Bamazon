var mysql = require('mySQL');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: 'root',
    // Your password
    password: 'Beernuts12',
    database: 'BamazonDB'
});
//query function to conect with MySQL database
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});