import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http:HttpClient) { }
  addAllUser(data:any){
    return this.http.post(`http://localhost:3000/donationData`,data);
  }
  getusers(){
    return this.http.get(`http://localhost:3000/donationData`);
  }
  remove(id:any){
    return this.http.delete(`http://localhost:3000/donationData/${id}`)
  }
  editUser(id:any){
    return this.http.get(`http://localhost:3000/donationData/${id}`)
  }
  updateUser(id:any,data:any){
    return this.http.put(`http://localhost:3000/donationData/${id}`,data)
  }
}
