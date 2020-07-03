import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  device = {
    name : '',
  };
  submitted = false;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(){}

  saveDevice(){
    const data = {
      name: this.device.name
    };

    this.deviceService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDevice(){
    this.submitted = false;
    this.device = {
      name : '',
    };
  }
}
