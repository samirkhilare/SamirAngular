import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent {
  constructor(private router:Router,
    private pizza:PizzaService){}
  toppings: string[] = ['Sausage','Hem','Becon','Pineapple','Pepperoni','olives','Corn','Mashrooms'];

  selectedCities: string[] = [];
  formdata!:FormGroup;
  ngOnInit(){
    this.formdata = new FormGroup({
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      pnumber: new FormControl('',[Validators.required]),
      street: new FormControl('',[Validators.required]),
      anumber:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      floor:new FormControl('',[Validators.required]),
      toppings:new FormArray([],[Validators.required])

    })
  }
  onchange(e:any){
    console.log(e.target.value);
    
  }
submit(){
  this.pizza.newOrder(this.formdata.value).subscribe((data)=>{
    console.log(data);  
    
  })
}
  
}
