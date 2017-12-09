import { Injectable } from '@angular/core';

@Injectable()
export class UserpreferanceService {
  colorPreference:string = 'orange';
  constructor() { 
    console.log("Intance start..");
  }

}
