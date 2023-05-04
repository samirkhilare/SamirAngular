import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
  // url = "http://localhost:3000"

  constructor(private http:HttpClient) { }
  // users() {
  //   return [
  //     {name:"samir", age:"24", email:"samir@gmail.com"},
  //     {name:"Aniket", age:"22", email:"aniket@gmail.com"},
  //     {name:"Akash", age:"23", email:"akash@gmail.com"},
  //   ]
  // }
  addUser(data:any){
    return this.http.post(`http://localhost:3000/userdata`,data);
  }
 
  getUsers(){
    return this.http.get(`http://localhost:3000/userdata`);
  }
  remove(id:any){
    return this.http.delete(`http://localhost:3000/userdata/${id}`)
  }
  editUser(id:any){
    return this.http.get(`http://localhost:3000/userdata/${id}`) 
  }
  updateUser(id:any,data:any){
    return this.http.put(`http://localhost:3000/userdata/${id}`,data)
  }
}
