import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users-menu',
  templateUrl: './users-menu.component.html',
  styleUrls: ['./users-menu.component.sass']
})
export class UsersMenuComponent implements OnInit {

  users:any;
  currentUser = null;
  currentUIndex = -1;
  user_name = '';
  
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  // Method for manage users

  retrieveUsers(){
    this.userService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshUList(){
    this.retrieveUsers();
    this.currentUser = null;
    this.currentUIndex = -1;
  }

  setActiveUser(user, index){
    this.currentUser = user;
    this.currentUIndex = index;
  }

  removeAllUsers(){
    this.userService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveUsers;
        },
        error => {
          console.log(error);
        });
  }

  searchUser(){
    this.userService.findByName(this.user_name)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }

}
