import { Component } from '@angular/core';
import { UserServiceService } from "src/app/user-service.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  constructor(private userdata:UserServiceService) {
    
  }
  
}
