export interface User {
    id:number,
    fullName: string;
    email: string,
    phoneNumber:string[],
    address:{
     city:string,
     postalCode:number,
     street:string
    }
    password: string 

}
