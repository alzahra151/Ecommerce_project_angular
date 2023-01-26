import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  IsLogedIn:boolean=false
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.IsLogedIn=this.userService.islogedin
  }
  logout(){
    this.userService.logout()
    this.IsLogedIn=this.userService.islogedin
    console.log( this.IsLogedIn)
  }

}
