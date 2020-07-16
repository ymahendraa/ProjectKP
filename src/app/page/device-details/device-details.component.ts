import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device/device.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.sass']
})
export class DeviceDetailsComponent implements OnInit {

  currentDevice = null;
  message = '';

  constructor(
    private deviceService : DeviceService,
    private route : ActivatedRoute,
    private router : Router ) { }

  ngOnInit(){
    this.message = '';
    this.getDevice(this.route.snapshot.paramMap.get('id'));
  }

  getDevice(id){
    this.deviceService.get(id)
      .subscribe(
        data => {
          this.currentDevice = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateDevice(){
    this.deviceService.update(this.currentDevice.device_id, this.currentDevice)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The device was updated successfully';
        },
        error => {
          console.log(error);
        });
  }

  deleteDevice(){
    this.deviceService.delete(this.currentDevice.device_id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log(error);
        });
  }
}
