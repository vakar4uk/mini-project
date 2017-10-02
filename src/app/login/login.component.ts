import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  @ViewChild('f') signupForm: NgForm;
  constructor() { 
 
    
  }
  // ngOnInit(){

  // }
  onSubmit() {
    console.log(this.signupForm);

    
  }
}