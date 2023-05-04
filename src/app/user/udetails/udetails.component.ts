import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserServiceService } from "src/app/user-service.service";

interface Gen {
  name: string,
  code: string
}
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-udetails',
  templateUrl: './udetails.component.html',
  styleUrls: ['./udetails.component.css']
})

export class UdetailsComponent {
  formdata!:FormGroup;
  value1:any;
  value3:any;
  val4!: Number;
  date3!: Date;
  gender: Gen[];

  cities:City[];

    selectedCity!: City;
    selectedGen!: Gen;
    allUsers:any;
    data:any; 

    

    constructor(private userdata:UserServiceService) {
          this.gender = [
              {name: 'Male', code: 'M'},
              {name: 'Female', code: 'F'},
              {name: 'Trans Gender', code: 'T'},
            
          ];
        this.cities = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'India', code: 'IND'},
          {name: 'Paris', code: 'PRS'}
      ];
      
    }

}

