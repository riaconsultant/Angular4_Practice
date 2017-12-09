import { Component, OnInit } from '@angular/core';
import { Customclass } from '../customclass';
import { CustomserviceService } from '../customservice.service';
import { Router } from '@angular/router';
import { Iemployee } from './iemployee';
import { UserpreferanceService } from '../userpreferance.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[CustomserviceService]
})

export class UsersComponent implements OnInit {
  title = 'app';
  employees:Iemployee[]=[];
  users:Customclass[];
  selectedUser:Customclass;
  isShow:boolean = false;
  selectRadioBtnChange:string='All';
  //private _uPref: UserpreferanceService;
  constructor(private router:Router,private service:CustomserviceService,private _uPref:UserpreferanceService){
    //this.users= this.service.getUsers();
    //this._uPref = new UserpreferanceService();  
  }

  get color():string{
    return this._uPref.colorPreference;
  }
  set color(val:string){
    this._uPref.colorPreference=val;
  }
  getTotalEmp():number{
    return this.employees.length;
  }
  getMaleEmp():number{
    return this.employees.filter(x=>x.gendor === "Male").length;
  }
  getFemaleEmp():number{
    return this.employees.filter(x=>x.gendor === "Female").length;
  }
  onChangeRadionBtn(selectedradiobtn:string):void{
    this.selectRadioBtnChange = selectedradiobtn;
  }
  getUsers(): void{
    this.service.getUsers().then(users => this.users = users);
  }

  getEmployees():void{
    this.service.getEmployees().then(employees => this.employees = employees);
  }

  ngOnInit(){
    console.log("User Call OnInit");
    this.getUsers();
    this.getEmployees();
  }
  onSelect = function(usr){
    console.log(usr);
    this.selectedUser = usr;
    this.router.navigate(['/details', this.selectedUser.id]);
  }

  testD = function(evt){
    this.isShow=this.isShow === false ? true : false ;
    console.log("evt");
  }
}
