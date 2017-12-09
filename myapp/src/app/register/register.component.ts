import { Component, OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnChanges {
  @Input() simpleInput:string = "";
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }

}
