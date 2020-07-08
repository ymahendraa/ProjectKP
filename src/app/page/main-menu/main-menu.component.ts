import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {
  
  devices:any;
  currentDevice = null;
  currentIndex = -1;
  name = '';
  id = '';

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.retrieveDevices();
  }

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

  refreshList(){
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
    this.deviceService.findByName(this.name)
      .subscribe(
        data => {
          this.devices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
