import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: Http, private _router: Router) { }

  get token(){
    return "";
  }
  
  set token(token:string){

  }

  isAuthenticated():Boolean{
    
    return true;
  }
  auth(){

  }
  
  signup(){
    let data={};
    this.http.post(environment.api_url+"/signup",data).subscribe((result)=>{
      
    })
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['login']);
  }

}
