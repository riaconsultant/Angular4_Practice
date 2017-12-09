import { Component, OnInit } from '@angular/core';
//import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from'@angular/forms';
import { UserpreferanceService } from '../userpreferance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 // providers:[UserpreferanceService]
})
export class HomeComponent implements OnInit {
  tab=[1,2,3,4]
  data=[{name:"H",key:1},{name:"L",key:2},{name:"M",key:3},{name:"N",key:5},{name:"O",key:8}];
  myform= { value:""};
  selVal={name:"H",key:1};
  //private _uPref:UserpreferanceService;
  constructor(private _uPref:UserpreferanceService) { 
   //this._uPref= new UserpreferanceService();
  }
  get color():string{
    return this._uPref.colorPreference;
  }
  set color(val:string){
    this._uPref.colorPreference=val;
  }
  ngOnInit() {
    //this.createForm();
  }

  onTabSel(arg){
    console.log(arg);
    this.selVal=arg;
  }
  submitData(myform:NgForm){
    this.myform = myform;
    console.log(myform.value);
    console.log(myform.valid);
  }
}
