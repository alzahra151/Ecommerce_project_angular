import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  registrationForm : FormGroup
  constructor(private formBulid:FormBuilder ,private userService:UserService ,private router:Router ,private httpClient:HttpClient) {
    this.registrationForm= formBulid.group({
        id:[''],
        fullName: [' ' ,[Validators.required ,Validators.pattern('[A-Za-z]{5,}')  ]],
        email :[' ', [Validators.required ]],
        phoneNumber: [''],
        address : formBulid.group({
          city :[''],
          postalCode :[''],
          street :['']
        }),
        password:['',[Validators.required , Validators.minLength(6)]],
        // confirmPassword:['']
    })
   }

   get fullName(){
    return this.registrationForm.get('fullName')
   }

   registration(){
    let userModel : User=this.registrationForm.value;
     console.log(userModel)
    this.httpClient.post<User>(`${environment.apiUrl}/users` ,userModel).subscribe({
        next :(user)=>{
           this.router.navigate(['/products'])
        },
        error:(err)=>{
          console.log(err)
        }
       })
   }
  ngOnInit(): void {

  }

}
