import { Component, OnInit } from '@angular/core';
import { CustomserviceService } from '../customservice.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Iemployee } from '../users/iemployee';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:Iemployee;
  stausmessage:string="Loading...";
  constructor(private service:CustomserviceService,private _activatedRoute:ActivatedRoute,
              private _location:Location, private _router:Router) { 
    
  }

  ngOnInit() {
    let empCode= this._activatedRoute.snapshot.params['code'];
    this.service.getEmployee(empCode).then(emp => {this.employee=emp})
                                    .catch(err => this.stausmessage=err);
    //console.log(empCode);
  }
  onBack():void{
    this._router.navigate(['/details','3']);
    //this._location.back();
    //console.log("Back");
  }
}
