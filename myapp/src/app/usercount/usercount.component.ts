import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usercount',
  templateUrl: './usercount.component.html',
  styleUrls: ['./usercount.component.css']
})
export class UsercountComponent implements OnInit {

  selectRadioBtnVal:string='All';
  @Input() 
  all:number=10;

  @Input()
  male:number=3;

  @Input()
  female:number =7;

  @Output()
  changeRadioEvt:EventEmitter<string> =  new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }
  
  onradioChange(){
    this.changeRadioEvt.emit(this.selectRadioBtnVal);
    console.log(this.selectRadioBtnVal);
  }

}
