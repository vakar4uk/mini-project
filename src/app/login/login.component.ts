import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class InventorysearchComponent implements OnInit {
  
//     constructor() { }
  
//     ngOnInit() {
//     }
  
//   }
  
export class LoginComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  ngOnInit(){
    var mysql = require('mysql');
    
    var con = mysql.createConnection({
      host: "localhost",
      user: "myusername",
      password: "mypassword"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }
  onSubmit() {
    console.log(this.signupForm);

    
  }
}