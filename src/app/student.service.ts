import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient ) { }
  
    newUser(data:any){
      return this.http.post(`http://localhost:3000/studentData`,data)
    }
    getUser(){
      return this.http.get(`http://localhost:3000/studentData`)
    }
    removeUser(id:any){
      return this.http.delete(`http://localhost:3000/studentData/${id}`)
    }
    editUser(id:any){
      return this.http.get(`http://localhost:3000/studentData/${id}`)
    }
    updateUser(id:any,data:any){
      return this.http.put(`http://localhost:3000/studentData/${id}`,data)
    }
}
