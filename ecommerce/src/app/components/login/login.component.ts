import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
IsLogedIn:boolean=true

  constructor(private  formBuilder: FormBuilder ,private router:Router ,private userService:UserService, private httpClient:HttpClient) { 
    this.loginForm= formBuilder.group({
      email :[' ', [Validators.required ]],
      password:[''],
    })
  }


login(){
  
  let user=this.loginForm.value 
  console.log(user)
//   let userss:User[]
//  this.httpClient.get(`${environment.apiUrl}/users`).subscribe({
//     next :(users)=>{
//       console.log(users)
//       this.users=users
//      this.users.find({user})
//      console.log(this.users)
//     }
//   })
  this.userService.login()
  this.IsLogedIn=this.userService.islogedin
  console.log(this.IsLogedIn)
  this.router.navigate(['/products'])
}


  ngOnInit() {
    this.IsLogedIn=this.userService.islogedin
  }

}
