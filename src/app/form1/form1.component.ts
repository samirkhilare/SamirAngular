import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component {
  currid: any;
  constructor (private router:Router, private user:UserServiceService){}
  Passmatch = '';
  products = [] ;
  editData:any;
  updated:any;

  // Formdata!:FormGroup;
  // Formdata =new FormGroup({
  //   Fname : new FormControl(""),
  //   Lname : new FormControl(""),
  //   // emailid : new FormControl("angular@gmail.com"),
  //   // passwd: new FormControl("abcd1234")
  // });
  firstnamevalidation = '^[a-zA-Z0-9]{3,15}$';
  lastnamevalidation = '^[a-zA-Z0-9]{3,15}$';
  emailvalidation = '[^@]*@[^@]*';
  passwordvalidation = '^[a-zA-Z0-9]{5,15}$';
  updatebtn= false;
  Formdata!: FormGroup;
  ngOnInit() {
    this.Formdata = new FormGroup({
      Fname: new FormControl('', [
        Validators.required,
        Validators.pattern(this.firstnamevalidation),
      ]),
      Lname: new FormControl('', [
        Validators.required,
        Validators.pattern(this.lastnamevalidation),
      ]),
      emailid: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailvalidation),
      ]),
      passwd: new FormControl('', [
        Validators.required,
        Validators.pattern(this.passwordvalidation),
      ]),
      confpass: new FormControl('', [
        Validators.required,
        Validators.pattern(this.passwordvalidation),
      ]),
    });
  }
  onClickSubmit() {
    console.log("samir");
    
    this.user.addUser(this.Formdata.value).subscribe((data)=>{
      console.log(data);
      this.ngOnInit();
      this.display();  
    })
    
  }
  display(){
    this.user.getUsers().subscribe((data:any)=> 
    {
      this.products=data;
      console.log(data);
    })
  }
  deleted(id:any){
    
    this.user.remove(id).subscribe((data:any)=>{
      console.log(data);
      this.display()
      
    })
  }
  edit(id:any){

    this.currid =id
    this.user.editUser(id).subscribe((data:any)=>{
      console.log("data",data);
      this.updatebtn=true;
      this.editData = data;
      this.Formdata.get('Fname')?.patchValue(this.editData.Fname)
      this.Formdata.get('Lname')?.patchValue(this.editData.Lname)
      this.Formdata.get('emailid')?.patchValue(this.editData.emailid)
    })
  }
  updateData(Formdata:FormGroup){
    this.user.updateUser(this.currid,this.Formdata.value).subscribe((data:any)=>{
      console.log("In update",data);
      this.updated=data;
      this.display();
      this.ngOnInit();

    })
  }
  
  
  get password(){return this.Formdata.get('passwd')}
  get password2(){return this.Formdata.get('confpass')}
  get email(){return this.Formdata.get('emailid')}
  get fname(){return this.Formdata.get('Fname')}
  get lname(){return this.Formdata.get('Lname')}

  macthpass(){
    // console.warn(this.Formdata.value.passwd);
    // console.log(this.Formdata.value.confpass);
    
    if (this.Formdata.value.passwd === this.Formdata.value.confpass) {
      this.router.navigate(['/form2'])
      
    } else {
      this.Passmatch='Password Not Match';
    }
  }
}

