import { Component } from '@angular/core';
declare var test:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  f(){
    new test();
  }
}
