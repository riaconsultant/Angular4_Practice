import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, gendor: any): any {
    if(gendor.toLowerCase() == 'male'){
      return "Mr. "+value;
    }else{
      return "Miss. "+value;
    }
  }

}
