export class con {
  constructor(){
    var mysql = require('mysql');

    var connections = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "admin",
      database: "mydb"
    });

    connections.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
    }); 
  }

}