import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:"<h1>Hello World !!{{title + obj.name}}</h1>"
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  obj = {name:"Manoj",age:3};
}
