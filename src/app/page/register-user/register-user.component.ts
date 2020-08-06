import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.sass']
})
export class RegisterUserComponent implements OnInit {
  user = {
    user_name : '',
    phone_num : '',
    address : ''
  };
  submitted = false;
  
  constructor(private userService : UserService) { }

  ngOnInit(): void {}

  saveUser(){
    const data = {
      user_name : this.user.user_name,
      phone_num : this.user.phone_num,
      address : this.user.address
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });    
  }

  newUser(){
    this.submitted =false;
    this.user = {
      user_name : '',
      phone_num : '',
      address : ''
    }
  }

}
 