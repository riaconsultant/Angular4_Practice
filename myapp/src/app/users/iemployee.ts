export interface Iemployee {
    code:string;
    name:string;
    gendor:string;
    annualSal:number;
    dob:String;
    //monthlySal(annualSal:number):number;
}

export class Employee implements Iemployee{


    constructor(public code:string, public name:string,public gendor:string,public annualSal:number,public dob:string){

    }
    // monthlySal(annualSal:number):number{
    //     return annualSal/12;
    // }
}