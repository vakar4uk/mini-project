var mysql = require('mysql');
	var connection = mysql.createpool({

		host: 'localhost',
		user: 'root',
		password: 'admin',
		database: 'mydb'
	});
module.exports = connection;