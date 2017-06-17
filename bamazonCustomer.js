var mysql = require('mySQL');
var inquirer = require("inquirer");
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
    start();
});

function start() {
	inquirer.prompt ({
		name: "userType",
		type: "rawlist"
		message: "Are you here to SHOP? or to WORK?"
		choices: ["SHOP", "WORK"]
	}).then(function(anwser){
	// based on their answer, either call the shop or the work functions
      if (answer.userType.toUpperCase() === "SHOP") {
        shopperStart();
      }
      else {
        managerStart();
      }
	})
}