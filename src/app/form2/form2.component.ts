import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  constructor (private router:Router){}
  emailvalidation = '[^@]*@[^@]*';
  passwordvalidation = '^[a-zA-Z0-9]{5,15}$';
  emailid="";
  emailid2="samirkhilare@gmail.com";
  passwd="";
  passwd2="samir"
  data="";
  display ={FirstName:"Fname",LastName:"Lname",Email:"emailid",Password:"passwd"}
  Passmatch="";
  
 

  Formdata!: FormGroup;
  ngOnInit() {
    this.Formdata = new FormGroup({
      emailid: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailvalidation),
      ]),
      passwd: new FormControl('', [
        Validators.required,
        Validators.pattern(this.passwordvalidation),
      ]),
    });
  }
  onClickSubmit(data: any) {
    this.emailid=data.emailid;
    this.passwd=data.passwd;
    console.warn(data);
  }
  get email() { return this.Formdata.get('emailid'); }
  
  get password() { return this.Formdata.get('passwd'); }
  // get password2() { return this.Formdata.get('passwd2'); }
  macthpass(){
    console.warn(this.Formdata.value.emailid);
    console.log(this.Formdata.value.passwd);
    
    if (this.passwd2 === this.Formdata.value.passwd && this.emailid2 === this.Formdata.value.emailid ) {
      this.router.navigate(['/userinfo/user'])
      console.log(this.passwd);
      
    } else {
      this.Passmatch='Inncorrect Credentials';
    }
  }
}

