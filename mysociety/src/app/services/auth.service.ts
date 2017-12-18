import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: Http, private _router: Router) { }

  get token(){
    return "";
  }
  
  set token(token:string){

  }

  auth(){

  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['login']);
  }

}
