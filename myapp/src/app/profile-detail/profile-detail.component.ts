import { Component, OnInit,Input } from '@angular/core';
import { Customclass } from '../customclass';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CustomserviceService } from '../customservice.service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  user:Customclass;
  //@Input() user:Customclass
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private customservice:CustomserviceService
  ) {}

  ngOnInit() {
    console.log(this.route);
    //debugger;
    this.route.paramMap
        .switchMap((params:ParamMap)=> this.customservice.getUser(+params.get('id')))
        .subscribe(user => this.user = user)
  }

  goBack():void{
    this.location.back();
  }

}
