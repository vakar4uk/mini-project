export class con {
  constructor(){
    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "admin",
      database: "mydb"
    });

    con.connect(function (err) {
      if (err) throw(err);
      console.log("Connected!");
    }); 
  }

}