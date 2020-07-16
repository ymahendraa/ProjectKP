import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device/device.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {
  
  devices:any;
  currentDevice = null;
  currentIndex = -1;
  device_name = '';
  
  users:any;
  currentUser = null;
  currentUIndex = -1;
  user_name = '';
  
  
  constructor(
    private deviceService: DeviceService,
    private userService : UserService) { }

  ngOnInit(): void {
    this.retrieveDevices();
    this.retrieveUsers();
  }

  //Method for manage devices
  
  retrieveDevices(){
    this.deviceService.getAll()
      .subscribe(
        data => {
          this.devices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshDList(){
    this.retrieveDevices();
    this.currentDevice = null;
    this.currentIndex = -1;
  }

  setActiveDevice(device, index){
    this.currentDevice = device;
    this.currentIndex = index;
  }

  removeAllDevices(){
    this.deviceService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveDevices();
        },
        error => {
          console.log(error);
        });
  }

  searchDevice(){
    this.deviceService.findByName(this.device_name)
      .subscribe(
        data => {
          this.devices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
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


