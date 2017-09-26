import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})


export class ForgotpasswordComponent {
  @ViewChild('f') signupForm: NgForm;

  ngOnInit() {
  }

}
