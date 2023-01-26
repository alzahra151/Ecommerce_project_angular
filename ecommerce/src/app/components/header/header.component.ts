import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  userLog:boolean;
  constructor(private userSevice:UserService) { 
    this.userLog=this.userSevice.islogedin
    
  }

  ngOnInit(): void {

     // this.userLog=this.authService.isUserLogged;
     this.userSevice.getLoggedStatus().subscribe(status => {
      this.userLog=status;
      console.log(this.userLog);

    })
  }

}
