import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device/device.service';
import { UserService } from  'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  device = {
    device_name : '',
    user_id : '',
    temperature: null
  };
  submitted = false;
  currentUser = null;
  message = '';
  constructor(
    private deviceService: DeviceService,
    private userService: UserService,
    private route : ActivatedRoute ) { }

  ngOnInit(){
    this.message = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id){
    this.userService.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
      
  }

  saveDevice(){
    const data = {
      device_name : this.device.device_name,
      user_id : this.currentUser.user_id,
    };

    this.deviceService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.message = 'The device was added successfully';
        },
        error => {
          console.log(error);
        });
  }

  newDevice(){
    this.submitted = false;
    this.device = {
      device_name : '',
      user_id : '',
      temperature: ''
    };
  }
}
