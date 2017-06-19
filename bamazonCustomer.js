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
		type: "input",
		message: "Are you here to SHOP or to WORK?"
		}).then(function(anwser){
	// based on their answer, either call the shop or the work functions
      if (anwser.userType.toUpperCase() === "SHOP") {
        shopperStart();
      } else if (anwser.userType.toUpperCase() === "WORK") {
        managerStart();
      } else {
      	console.log('Please Try Again');
      }
	})
}

function shopperStart() {
	console.log('________________________________________');
	console.log('');
	console.log('******* WELCOME TO BAMAZON.COM! ********');
	console.log('Almost All Your Shopping Needs Met Here!');
	console.log('           (More or Less)               ');
	console.log('________________________________________');

	connection.query('SELECT * FROM products', function(err, results) {
		for (var i = 0; i < results.length; i++) {
			console.log(results[i].item_id + ' | ' + results[i].product_name + ' | ' + results[i].department_name + ' | $:' + results[i].price + ' | ' + results[i].stock_quantity);
		}
		console.log('____________________________________________');
	})
};

function managerStart() {
	console.log('________________________________________');
	console.log('');
	console.log('Welcome Back to Bamazon.com, Human Slave');
	console.log('           Now Get to Work              ');
	console.log('            (We Own You)                ');
	console.log('________________________________________');
};