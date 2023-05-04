import { Component } from '@angular/core';
import { DonationService } from '../donation.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent {
 
  formdata!: FormGroup;
  nameValidation = '^[a-zA-Z0-9 ]{3,15}$';
  emailValidation='[^@]*@[^@]*';
  list:[]=[];
  data:any;
  visible=false ;
  show=false;
  editData:any;
  cuurentId:any;
  updated:any;
  updatebtn=false;
  new: any;
  constructor(private donationService: DonationService) {}
  ngOnInit() {
    this.formdata = new FormGroup({
      fname: new FormControl('', [
        Validators.required,Validators.pattern(this.nameValidation),
      ]),
      email: new FormControl('',[ 
        Validators.required,Validators.pattern(this.emailValidation)
      ]),
      mobile: new FormControl('',[ 
        Validators.required,Validators.minLength(10)
      ]),
      amount: new FormControl('',[ 
        Validators.required,Validators.minLength(3)
      ]),


    });
  }
  get Fname(){return this.formdata.get('fname')}
  get Email(){return this.formdata.get('email')}
  get Mobile(){return this.formdata.get('mobile')}
  get Amount(){return this.formdata.get('amount')}
  onClicksubmit(){
    this.donationService.addAllUser(this.formdata.value).subscribe((data:any)=>{
      console.log(data);
      this.display();
      this.ngOnInit();
    })
  }
  display(){
    this.donationService.getusers().subscribe((data:any)=>{
      this.list = data
      this.visible=true ;
      this.show=true;
    })
  }
  closeDisplay(){
    this.show=false;
    this.visible=false
  }
  deleteUser(id:any){
    this.donationService.remove(id).subscribe((data:any)=>{
      console.log(data);
      this.display();
      
    })
  }
  edit(id:any){
    this.cuurentId=id;
    this.donationService.editUser(id).subscribe((data:any)=>{
      console.log(data);
      this.updatebtn=true;
      this.editData = data;
      this.formdata.get('fname')?.patchValue(this.editData.fname)
      this.formdata.get('email')?.patchValue(this.editData.email)
      this.formdata.get('mobile')?.patchValue(this.editData.mobile)
      this.formdata.get('amount')?.patchValue(this.editData.amount)
      
    })
  }
  update(formdata:FormGroup){
    this.donationService.updateUser(this.cuurentId,this.formdata.value).subscribe((data:any)=>{
      console.log(data);
      this.new=data;
      this.display();
      this.ngOnInit();
      
    })
  }

  
}
