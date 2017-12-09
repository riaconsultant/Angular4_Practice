import { Injectable } from '@angular/core';
import { Users } from '../app/mock.service';
import { Customclass } from './customclass';
import { Http,Response }from '@angular/http';
import { Iemployee } from './users/iemployee';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';
// import 'rxjs/add/operator/toPromise';
import { Employees } from './employee.mock.service';

@Injectable()
export class CustomserviceService {
  //users:listUsers
  constructor(private _http:Http) { }

  getUsers():Promise <Customclass[]>{
    return Promise.resolve(Users);
  }

  // getEmployees():Observable<Iemployee[]>{
  //   return this._http.get('employee.mock.service.ts')
  //                     .map((resp:Response)=> <Iemployee[]>resp.json())
  //                     .catch(this.handleError);
  // }

  getEmployees():Promise<Iemployee[]>{
    return Promise.resolve(Employees);
  }

  handleError(err:Response){
    console.error(err);
  }
  getUser(id:number): Promise <Customclass>{
    return this.getUsers().then(users=>users.find(user => user.id === id));
  }

  getEmployee(empCode:string):Promise<Iemployee>{
    return this.getEmployees().then(employees=>employees.find(employee => employee.code === empCode));
  }
  // getEmployee(empCode:string):Observable<Iemployee>{
  //   return this._http.get(''+empCode)
  //                    .map((resp:Response)=> <Iemployee[]>resp.json())
  //                    .catch(this.handleError);
  // }
}


