import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators, MinLengthValidator } from '@angular/forms';
import { StudentService } from '../student.service';



interface Gen {
  name: string,
  code: string
}
interface City {
  name: string,
  code: string
}
interface Univercity {
  name: string,
  code: string
}
interface Stream {
  name: string,
  code: string
}
interface Degree {
  name: string,
  
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {
  formdata!:FormGroup;
  cities: City[] = [];
  gender: Gen[] = [];
  date3!: Date;
  universities: Univercity[] = [];
  eduStream: Stream[]=[];
  degree: Degree[]=[];
  list=[];
  editData:any;
  view=false;
  show=false;
 
  
  selectedCity!: City;
  selectedGen!: Gen;
  selectedUni!: Univercity;
  selectedStream!:Stream;
  selectedDegree!:Degree;
  currentId: any;
  updated: any;
  


  constructor(private student:StudentService){
    this.cities = [
      {name: 'Select City', code: 'CT'},
      {name: 'Pune', code: 'PN'},
      {name: 'Satara', code: 'STR'},
      {name: 'Mumbai', code: 'MB'},
      {name: 'Solapur', code: 'SLP'},
      {name: 'Sambhaji Nagar', code: 'SGN'},
      {name: 'Kolhapur', code: 'KLP'},
      {name: 'Sangali', code: 'SGL'},
      {name: 'Other', code: 'OTR'}
  ];

  this.gender=[
    {name:'Select Gender',code:'SG'},
    {name:'Male',code:'M'},
    {name:'Female',code:'FM'},
    {name:'Trans Gender',code:'TG'}
  ];
  this.universities=[
    {name:'Select University',code:'SU'},
    {name:'Pune University',code:'PU'},
    {name:'Mumbai University',code:'MU'},
    {name:'Banglore University',code:'BU'},
    {name:'Chandigarh University',code:'CU'}
  ];
  this.eduStream=[
    {name:'Select Stream',code:'SS'},
    {name:'Science',code:'SC'},
    {name:'Arts',code:'AT'},
    {name:'Commerce',code:'CM'},
    {name:'Engineering',code:'ENG'}
  ];
  this.degree=[
    {name:'Select Degree'},
    {name:'BCA'},
    {name:'BCOM'},
    {name:'BSC'},
    {name:'BA'},
    {name:'BE'},
    {name:'BCS'},
  ];

  
}
ngOnInit() {

  this.formdata = new FormGroup({
    fname: new FormControl(""),
    lname: new FormControl(""),
    city: new FormControl(""),
    gender: new FormControl(""),
    calender: new FormControl(""),
    mobile: new FormControl("",[Validators.required,Validators.minLength(10)]),
    email: new FormControl(""),
    uniCity: new FormControl(""),
    stream: new FormControl(""),
    degree: new FormControl("")
});
  }
  
  onClickSubmit(){
    console.warn("submit",this.formdata.value);
    
    this.student.newUser(this.formdata.value).subscribe((data)=>{
      this.display();
    })
  }
  display(){
    this.student.getUser().subscribe((data:any)=>{
      this.list=data;
      console.warn(this.list);
      this.view=true;
      this.show=true;
    })
  }
  deleteUser(id:any){
    this.student.removeUser(id).subscribe((data:any)=>{
      this.display();
    })
  }
  edit(id:any){
    this.student.editUser(id).subscribe((data)=>{
      this.display();
      this.editData=data;
      this.currentId=id;
      this.updated=true
      this.formdata.get('fname')?.patchValue(this.editData.fname)
      this.formdata.get('lname')?.patchValue(this.editData.lname)
      this.formdata.get('city')?.patchValue(this.editData.city)
      this.formdata.get('gender')?.patchValue(this.editData.gender)
      this.formdata.get('calender')?.patchValue(this.editData.calender)
      this.formdata.get('mobile')?.patchValue(this.editData.mobile)
      this.formdata.get('email')?.patchValue(this.editData.email)
      this.formdata.get('uniCity')?.patchValue(this.editData.uniCity)
      this.formdata.get('stream')?.patchValue(this.editData.stream)
      this.formdata.get('degree')?.patchValue(this.editData.degree)
    })
  }
  update(formdata:FormGroup){
    this.student.updateUser(this.currentId,this.formdata.value).subscribe((data:any)=>{
      this.updated=data;
      this.display();
      this.ngOnInit();
      
    })
  }
  closeDisplay(){
    this.view=false;
    this.show=false;
  }
}
